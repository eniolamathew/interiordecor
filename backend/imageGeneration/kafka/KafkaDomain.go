package kafka

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"time"
)

// kafkaDomain struct holds the combined kafkaPayload, which includes jobId and prompt
type kafkaDomain struct {
}

// NewKafkaDomain initializes kafkaDomain with the combined kafkaPayload
func NewKafkaDomain() *kafkaDomain {
	return &kafkaDomain{}
}

const (
	DefaultKafkaBroker = "kafka_interior:9092"
	DefaultTopic       = "image-generation-request-topic"
	ConsumerGroupID    = "image-generation-group"
	maxRetries         = 15               
	retryInterval      = 5 * time.Second 
)

// Run initializes and runs the Kafka consumer with retry logic
func (k *kafkaDomain) Run() error {
	// Create Kafka consumer with retries
	consumer, err := k.createKafkaConsumer()
	if err != nil {
		return fmt.Errorf("failed to create Kafka consumer after retries: %v", err)
	}
	defer consumer.Close()

	// Listen for incoming messages in a separate goroutine
	go consumer.Listen()

	// Handle system interrupts to cleanly shut down the consumer
	sigterm := make(chan os.Signal, 1)
	signal.Notify(sigterm, os.Interrupt)
	<-sigterm

	log.Println("Kafka consumer is shutting down...")
	return nil
}

// createKafkaConsumer attempts to create a Kafka consumer with retry logic
func (k *kafkaDomain) createKafkaConsumer() (*KafkaConsumer, error) {
	var consumer *KafkaConsumer
	var err error

	for i := 0; i < maxRetries; i++ {
		consumer, err = NewKafkaConsumer([]string{DefaultKafkaBroker}, ConsumerGroupID)
		if err == nil {
			log.Println("Kafka consumer setup completed.")
			return consumer, nil
		}

		log.Printf("Failed to create Kafka consumer, retrying in %v... (%d/%d)", retryInterval, i+1, maxRetries)
		time.Sleep(retryInterval)
	}

	return nil, fmt.Errorf("failed to create Kafka consumer after %d attempts: %v", maxRetries, err)
}