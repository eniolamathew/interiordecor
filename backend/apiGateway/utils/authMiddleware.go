package utils

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

// CORS for browser apps
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		origin := c.Request.Header.Get("Origin")
		if origin == "" {
			origin = "*"
		}
		c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
		c.Writer.Header().Set("Vary", "Origin")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type, X-Request-Id")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")

		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	}
}

// AuthMiddleware validates JWT tokens and extracts userId into context
func AuthMiddleware(jwtKey string) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authHeader := ctx.GetHeader("Authorization")
		tokenString := strings.TrimSpace(strings.TrimPrefix(authHeader, "Bearer "))

		// Allow health checks without auth
		if strings.HasPrefix(ctx.FullPath(), "/healthz") || strings.HasPrefix(ctx.FullPath(), "/readyz") {
			ctx.Next()
			return
		}

		if tokenString == "" {
			RespondWithError(ctx, http.StatusUnauthorized, "Missing token")
			ctx.Abort()
			return
		}

		// Parse and validate token
		claims := jwt.MapClaims{}
		token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			if len(jwtKey) == 0 {
				return nil, fmt.Errorf("JWT key is not set")
			}
			return []byte(jwtKey), nil
		})

		if err != nil {
			RespondWithError(ctx, http.StatusUnauthorized, "Invalid or expired token")
			ctx.Abort()
			return
		}

		if !token.Valid {
			RespondWithError(ctx, http.StatusUnauthorized, "Invalid token claims")
			ctx.Abort()
			return
		}

		// Extract userId
		userID, _ := claims["userId"].(string)
		if userID == "" {
			userID, _ = claims["sub"].(string) // fallback to "sub"
		}
		if userID != "" {
			ctx.Set("userId", userID)
			ctx.Request.Header.Set("X-User-ID", userID)
		}

		ctx.Next()
	}
}

// Optional: request id
func RequestIDMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.GetHeader("X-Request-Id")
		if id == "" {
			// super lightweight unique-ish id
			id = time.Now().UTC().Format("20060102T150405.000000000")
		}
		c.Writer.Header().Set("X-Request-Id", id)
		c.Next()
	}
}

// Tiny in-memory rate limiter (per-process; fine for demo/dev)
func RateLimitMiddleware(maxPerWindow int, window time.Duration) gin.HandlerFunc {
	var tokens = maxPerWindow
	var last = time.Now()

	return func(c *gin.Context) {
		now := time.Now()
		elapsed := now.Sub(last)
		if elapsed >= window {
			// reset window
			tokens = maxPerWindow
			last = now
		}
		if tokens <= 0 {
			c.AbortWithStatusJSON(http.StatusTooManyRequests, gin.H{"error": "rate limit exceeded"})
			return
		}
		tokens--
		log.Printf("[ratelimit] remaining=%d", tokens)
		c.Next()
	}
}

// LoggingMiddleware logs the incoming HTTP request method, path, and duration.
func LoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		log.Printf("Started %s %s", r.Method, r.URL.Path)

		next.ServeHTTP(w, r)

		duration := time.Since(start)
		log.Printf("Completed %s %s in %v", r.Method, r.URL.Path, duration)
	})
}
