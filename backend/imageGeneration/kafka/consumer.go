package kafka

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"time"

	"github.com/IBM/sarama"
	"github.com/joho/godotenv"
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
		err := kc.ConsumerGroup.Consume(ctx, []string{ImageGenerationTopic}, kc)
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

	//Create a Kafka producer to send the response
	producer, err := NewKafkaProducer([]string{DefaultKafkaBroker}, ReponseTopic)
	if err != nil {
		return fmt.Errorf("failed to start Kafka producer: %v", err)
	}

	for message := range claim.Messages() {
		log.Printf("Message received on topic %s: %s", message.Topic, string(message.Value))

		// Parse the Kafka message to extract the prompt and JobID
		var kafkaPayload map[string]string
		err := json.Unmarshal(message.Value, &kafkaPayload)
		if err != nil {
			log.Printf("Error unmarshalling Kafka message: %v", err)
			continue
		}

		// Extract the prompt and JobID from the Kafka message
		prompt, promptExists := kafkaPayload["prompt"]
		jobID, jobIDExists := kafkaPayload["jobId"]
		if !promptExists || !jobIDExists {
			log.Printf("Required fields not found in Kafka message")
			continue
		}

		// Call the generateImage function with the extracted prompt
		imageURL := generateImage(prompt)
		if imageURL == "" {
			log.Printf("Image generation failed for prompt: %s", prompt)
			continue
		}

		// Log the generated image URL
		log.Printf("Generated image URL for JobID %s: %s", jobID, imageURL)

		// Prepare the response payload with imageURL and jobID
		responsePayload := map[string]string{
			"imageurl": imageURL,
			"jobId":    jobID,
		}

		// Serialize the response as JSON
		responseBytes, err := json.Marshal(responsePayload)
		if err != nil {
			log.Printf("Error marshalling response: %v", err)
			continue
		}

		err = producer.SendMessage(responseBytes)
		if err != nil {
			log.Printf("Failed to send message to image-generation-response-topic: %v", err)
			continue
		}

		log.Printf("Successfully sent image URL and JobID to image-generation-response-topic")

		// Acknowledge that the message has been consumed
		session.MarkMessage(message, "")
	}

	defer producer.Close()

	return nil
}

// Function to call the DALL-E API and generate an image based on the prompt
func generateImage(prompt string) string {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	// Retrieve OpenAI API key from environment variables
	part1 := os.Getenv("API_KEY_PART1")
	part2 := os.Getenv("API_KEY_PART2")
	part3 := os.Getenv("API_KEY_PART3")
	part4 := os.Getenv("API_KEY_PART4")

	apiKey := part1 + part2 + part3 + part4

	if apiKey == "" {
		log.Fatal("OPENAI_API_KEY environment variable not set")
	}

	// Set the DALL-E API URL
	url := "https://api.openai.com/v1/images/generations"

	// Create the request payload for DALL-E API
	payload := map[string]interface{}{
		"model":   "dall-e-3",
		"quality": "hd",
		"prompt":  prompt,
		"n":       1,
		"size":    "1024x1024",
	}
	payloadBytes, _ := json.Marshal(payload)

	// Prepare the HTTP request
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(payloadBytes))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", apiKey))

	// Make the HTTP request to DALL-E API
	client := &http.Client{Timeout: 500 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		log.Printf("Error calling DALL-E API: %v\n", err)
		return ""
	}
	defer resp.Body.Close()

	// Parse the API response
	body, _ := ioutil.ReadAll(resp.Body)

	var response map[string]interface{}
	err = json.Unmarshal(body, &response)
	if err != nil {
		log.Printf("Error unmarshalling DALL-E response: %v\n", err)
		return ""
	}

	// Continue with your existing checks
	data, ok := response["data"].([]interface{})
	if !ok || len(data) == 0 {
		log.Printf("Error processing DALL-E response: 'data' field is missing or empty\n")
		return ""
	}

	// Assuming you want to extract the URL from the first item in "data"
	imageData, ok := data[0].(map[string]interface{})
	if !ok {
		log.Printf("Error processing DALL-E response: first item in 'data' is not a valid map\n")
		return ""
	}

	// Extract the image URL safely
	imageURL, ok := imageData["url"].(string)
	if !ok || imageURL == "" {
		log.Printf("Error processing DALL-E response: 'url' field is missing or empty\n")
		return ""
	}

	return imageURL
}
