package utils

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

func NewReverseProxy(target string) http.Handler {
	u, err := url.Parse(target)
	if err != nil {
		log.Fatalf("[gateway] invalid target url %q: %v", target, err)
	}
	proxy := httputil.NewSingleHostReverseProxy(u)

	// Preserve X-Forwarded-* headers so downstream logs see client info
	origDirector := proxy.Director
	proxy.Director = func(r *http.Request) {
		origDirector(r)

		// Ensure Authorization header is forwarded
		// (Gin copies headers by default; this is extra defensive)
		if auth := r.Header.Get("Authorization"); auth != "" {
			r.Header.Set("Authorization", auth)
		}
		// Add a sane Host header for some backends
		r.Host = u.Host
	}

	// Optional: log errors from target
	proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, e error) {
		log.Printf("[gateway] proxy error: %v %s %s", e, r.Method, r.URL.Path)
		http.Error(w, "upstream error", http.StatusBadGateway)
	}
	return proxy
}

// ProxyForward returns a Gin handler that strips N leading segments before proxying.
func ProxyForward(h http.Handler, stripSegments int) gin.HandlerFunc {
	return func(c *gin.Context) {
		incoming := c.Request.URL.Path

		// Drop N segments
		for i := 0; i < stripSegments; i++ {
			if idx := strings.Index(incoming[1:], "/"); idx >= 0 {
				incoming = incoming[idx+1+1:] // skip "/" + segment
			} else {
				incoming = "/"
				break
			}
		}

		if !strings.HasPrefix(incoming, "/") {
			incoming = "/" + incoming
		}

		c.Request.URL.Path = incoming
		h.ServeHTTP(c.Writer, c.Request)
	}
}
