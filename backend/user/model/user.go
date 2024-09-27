package model

type User struct {
	Id           uint64 `json:"id"`
	Email        string `json:"eamil"`
	PasswordHash string `json:"password"`
	Subscribed   bool   `json:"subscribed"`
	Createdat    string `json:"createdat"`
}
