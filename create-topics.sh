#!/bin/bash
kafka-topics --create --topic image-generation-request-topic --bootstrap-server kafka_interior:9092 --partitions 1 --replication-factor 1
kafka-topics --create --topic image-generation-response-topic --bootstrap-server kafka_interior:9092 --partitions 1 --replication-factor 1