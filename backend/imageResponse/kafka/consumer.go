package kafka

import (
	"bytes"
	"context"
	"encoding/json"
	"log"
	"net/http"

	"github.com/IBM/sarama"
)

const (
	ImageGenerationTopic = "image-generation-request-topic"
	ReponseTopic         = "image-generation-response-topic"
)

// KafkaConsumer represents the Kafka consumer
type KafkaConsumer struct {
	ConsumerGroup sarama.ConsumerGroup
}

// NewKafkaConsumer initializes a new Kafka consumer group
func NewKafkaConsumer(brokers []string, groupID string) (*KafkaConsumer, error) {
	config := sarama.NewConfig()
	config.Version = sarama.V2_5_0_0
	config.Consumer.Group.Rebalance.Strategy = sarama.BalanceStrategyRoundRobin

	consumerGroup, err := sarama.NewConsumerGroup(brokers, groupID, config)
	if err != nil {
		return nil, err
	}

	return &KafkaConsumer{
		ConsumerGroup: consumerGroup,
	}, nil
}

// Listen listens to the Kafka topic for incoming messages
func (kc *KafkaConsumer) Listen() {
	ctx := context.Background()

	for {
		err := kc.ConsumerGroup.Consume(ctx, []string{ReponseTopic}, kc)
		if err != nil {
			log.Fatalf("Error consuming Kafka messages: %v", err)
		}
	}
}

// Setup runs once when the consumer is initialized
func (kc *KafkaConsumer) Setup(_ sarama.ConsumerGroupSession) error {
	log.Println("Kafka consumer setup completed.")
	return nil
}

// Cleanup runs once when the consumer is finished
func (kc *KafkaConsumer) Cleanup(_ sarama.ConsumerGroupSession) error {
	log.Println("Kafka consumer cleanup done.")
	return nil
}

// Close closes the Kafka consumer
func (kc *KafkaConsumer) Close() error {
	return kc.ConsumerGroup.Close()
}

// ConsumeClaim processes incoming messages from the topic
func (kc *KafkaConsumer) ConsumeClaim(session sarama.ConsumerGroupSession, claim sarama.ConsumerGroupClaim) error {
	for message := range claim.Messages() {
		log.Printf("Message received on topic %s: %s", message.Topic, string(message.Value))

		// Parse the Kafka message to extract the prompt
		var kafkaPayload map[string]string
		err := json.Unmarshal(message.Value, &kafkaPayload)
		if err != nil {
			log.Printf("Error unmarshalling Kafka message: %v", err)
			continue
		}

		// Extract the prompt and JobID from the Kafka message
		imageurl, imageurlExists := kafkaPayload["imageurl"]
		jobId, jobIDExists := kafkaPayload["jobId"]
		if !imageurlExists || !jobIDExists {
			log.Printf("Required fields not found in Kafka message")
			continue
		}

		NotifyDesignService(jobId, imageurl)

		session.MarkMessage(message, "")
	}
	return nil
}

func NotifyDesignService(jobId, imageURL string) {
	url := "http://interior_design_container:7073/design/updatestatus"

	// Create the payload with jobId and imageURL
	payload := map[string]string{
		"jobId":    jobId,
		"imageURL": imageURL,
	}
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		log.Printf("Error marshalling payload: %v", err)
		return
	}

	// Send the HTTP POST request to the Design service
	resp, err := http.Post(url, "application/json", bytes.NewBuffer(payloadBytes))
	if err != nil {
		log.Printf("Error sending HTTP request to Design service: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("Design service responded with status code: %d", resp.StatusCode)
	}
}
