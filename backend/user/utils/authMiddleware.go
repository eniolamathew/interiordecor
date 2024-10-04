package utils

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		origin := c.Request.Header.Get("Origin")
		log.Printf("CORS Middleware: Request from origin %s", origin)

		if origin == "https://roomify.org" {
			c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
			log.Println("Set Access-Control-Allow-Origin to roomify.org")
		} else {
			c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
			log.Println("Set Access-Control-Allow-Origin to *")
		}

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Exposed-Headers", "Link")

		// Handle OPTIONS requests
		if c.Request.Method == "OPTIONS" {
			log.Println("Received OPTIONS request, returning No Content")
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}

// AuthMiddleware is a middleware that checks for the JWT token
func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var jwtKey = []byte(os.Getenv("JWT_KEY"))
		authHeader := ctx.GetHeader("Authorization")
		tokenString := strings.TrimSpace(strings.TrimPrefix(authHeader, "Bearer "))
		if tokenString == "" {
			RespondWithError(ctx, http.StatusUnauthorized, "Missen token")
			ctx.Abort()
			return
		}

		fmt.Println("JWT Key at generation:", string(jwtKey)) // Log JWT Key
		token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
			if len(jwtKey) == 0 {
				return nil, fmt.Errorf("JWT key is not set")
			}
			return jwtKey, nil
		})

		if err != nil {
			RespondWithError(ctx, http.StatusUnauthorized, "Invalid or expired token")
			ctx.Abort()
			return
		}

		if !token.Valid {
			RespondWithError(ctx, http.StatusUnauthorized, "Invalid token")
			ctx.Abort()
			return
		}

		claims, ok := token.Claims.(*Claims)
		if !ok {
			RespondWithError(ctx, http.StatusUnauthorized, "Invalid token claims")
			ctx.Abort()
			return
		}

		// Store user ID in the context
		ctx.Set("userId", claims.UserID)
		ctx.Next()
	}
}

func TrustedProxyMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Extract the client's real IP from X-Forwarded-For
		forwardedIP := c.Request.Header.Get("X-Forwarded-For")
		log.Printf("X-Forwarded-For header (client IP): %s", forwardedIP)

		// Get the IP of the proxy server (Cloudflare or NGINX)
		proxyIP := c.ClientIP()
		log.Printf("Proxy IP (ClientIP): %s", proxyIP)

		// Check if the proxy IP is trusted
		if !isTrustedProxy(proxyIP) {
			log.Printf("Request blocked due to untrusted proxy IP: %s", proxyIP)
			c.AbortWithStatus(http.StatusForbidden)
			return
		}

		// Continue processing the request
		c.Next()
	}
}

// Check if the proxy IP is trusted (like Cloudflare or NGINX)
func isTrustedProxy(ip string) bool {
	trustedProxies := []string{
		"127.0.0.1", // Localhost
		"192.168.0.1",
		"192.168.65.1",
		"172.67.146.167",
		"104.21.57.150",
	}

	for _, trustedIP := range trustedProxies {
		if strings.Contains(ip, trustedIP) {
			return true
		}
	}
	return false
}
