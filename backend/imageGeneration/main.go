package main

import (
	"imageGeneration/kafka"
	"log"
)

func main() {
	// Run the Kafka Reponse consumer
	responseEvent := kafka.NewKafkaDomain()

	if err := responseEvent.Run(); err != nil {
		log.Fatalf("failed to recieve message from the producer: %s", err)
	}
}