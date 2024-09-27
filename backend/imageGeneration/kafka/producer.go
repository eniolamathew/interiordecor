package kafka

import (
	"log"

	"github.com/IBM/sarama"
)

type KafkaProducer struct {
	Producer sarama.SyncProducer
	Topic    string
}

// NewKafkaProducer initializes a new Kafka producer.
func NewKafkaProducer(brokers []string, topic string) (*KafkaProducer, error) {
	producer, err := sarama.NewSyncProducer(brokers, nil)
	if err != nil {
		return nil, err
	}

	return &KafkaProducer{
		Producer: producer,
		Topic:    topic,
	}, nil
}

// SendMessage sends an message to the Kafka topic.
func (kp *KafkaProducer) SendMessage(kafkaPayload []byte) error {

	msg := &sarama.ProducerMessage{
		Topic: kp.Topic,
		Value: sarama.ByteEncoder(kafkaPayload),
	}

	_, _, err := kp.Producer.SendMessage(msg)
	if err != nil {
		return err
	}
	log.Printf("Message sent to Kafka: %s", kafkaPayload)
	return nil
}

// Close closes the Kafka producer.
func (kp *KafkaProducer) Close() error {
	return kp.Producer.Close()
}
