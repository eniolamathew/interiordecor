package kafka

import (
	"fmt"
	"log"
	"time"
)

// kafkaDomain struct holds the combined kafkaPayload, which includes jobId and prompt
type kafkaDomain struct {
	kafkaPayload string
}

// NewKafkaDomain initializes kafkaDomain with the combined kafkaPayload
func NewKafkaDomain(kafkaPayload string) *kafkaDomain {
	return &kafkaDomain{kafkaPayload}
}

const (
	DefaultKafkaBroker = "kafka_interior:9092"
	DefaultTopic       = "image-generation-request-topic"
)

func (k *kafkaDomain) Run() error {
	// Initialize Kafka producer

	log.Printf("Connecting to Kafka broker: %v", DefaultKafkaBroker)

	producer, err := NewKafkaProducer([]string{DefaultKafkaBroker}, DefaultTopic)
	if err != nil {
		log.Printf("Error creating Kafka producer: %v", err)

		return fmt.Errorf("failed to start Kafka producer: %v", err)
	}
	defer producer.Close()

	// Simulate sending payload to Kafka
	if err := producer.SendMessage(k.kafkaPayload); err != nil {
		return fmt.Errorf("failed to send message to Kafka: %v", err)
	}
	log.Printf("Successfully sent payload: %s", k.kafkaPayload)

	time.Sleep(2 * time.Second) // Simulate delay
	return nil
}
