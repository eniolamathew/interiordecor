package utils

import "github.com/golang-jwt/jwt"

type Claims struct {
	UserID   uint64   `json:"user_id"`
	Email    string   `json:"email"`
	ClientID string   `json:"client_id"`
	Sub      string   `json:"sub"`
	AuthTime int64    `json:"auth_time"`
	Idp      string   `json:"idp"`
	Role     []string `json:"role"`
	jwt.StandardClaims
}
