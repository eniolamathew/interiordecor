# Build
FROM golang:1.22 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

# Copy the apiGateway service source code
COPY . . 

RUN CGO_ENABLED=0 GOOS=linux go build -o apiGateway ./main.go

# Run
FROM alpine:3.19
RUN apk add --no-cache ca-certificates
WORKDIR /app
COPY --from=builder /app/apiGateway /app/apiGateway
COPY .env /app/.env
EXPOSE 8080
CMD ["./apiGateway"]