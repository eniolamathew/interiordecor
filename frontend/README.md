# Roomify.org - AI-Powered Interior Design

Roomify.org is a SaaS platform that leverages artificial intelligence to revolutionize the interior design industry. Roomify empowers users to create personalized, high-quality interior designs tailored to their preferences within seconds. By simply providing details such as room type, preferred style, and color palette, users can generate realistic visuals of their ideal space through a sophisticated AI model.

## How Roomify Works

Roomify combines cutting-edge AI and web technologies to deliver an intuitive, seamless design experience:
- Users input details about the space they want to design—room dimensions, style preferences, colors, and more.
- Roomify's backend processes this input, fine-tuning the data before passing it to a large language model (LLM) for image generation.
- The platform generates a high-quality, realistic visual representation of the interior space and provides a custom URL where users can view and download their designs.

## Technology Stack

Roomify is built on a robust microservices architecture to ensure scalability, reliability, and performance:
- **Frontend**: Developed with [Next.js](https://nextjs.org), offering a responsive, user-friendly interface.
- **Backend**: Implemented in **Go**, with microservices connected via **gRPC** for efficient communication between services.
- **Messaging Queue**: Powered by **Kafka** to handle asynchronous tasks such as image generation requests.
- **Database**: **PostgreSQL** serves as the primary database, ensuring reliable and efficient data storage.
- **Containerization**: The entire platform is containerized using **Docker**, enabling seamless deployment across environments.
- **CI/CD Pipelines**: Integrated CI/CD ensures continuous deployment, testing, and seamless updates as the platform evolves.

## Deployment

Roomify is deployed on a VPS (Virtual Private Server) for enhanced control over the server environment and scalability.

### Setting Up Locally

To run Roomify locally for development:

1. Clone the repository and install dependencies:
   ```bash
   npm install

   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   
   ```

3. Open http://localhost:3000 to view the app in your browser. 

## Features

- **AI-Powered Interior Design**: Roomify's AI model generates visually accurate and personalized interior designs based on user preferences.
- **User-Friendly Interface**: Built with Next.js, Roomify offers an intuitive UI that makes designing rooms effortless.
- **Custom Design Output**: Each design is delivered via a unique URL, where users can view and download their created spaces.
- **Seamless Asynchronous Processing**: Kafka ensures that image generation requests are handled asynchronously, optimizing performance and user experience.
- **Reliable, Scalable Backend**: The Go-based microservices architecture is designed for scalability and high performance, making it robust for high traffic.

## Architecture Overview

Roomify’s architecture is built to ensure reliability and performance:

- **Microservices Architecture**: Go-based microservices ensure modularity and easy scalability.
- **Asynchronous Processing**: Kafka handles background tasks, allowing image generation and other operations to run smoothly.
- **Docker for Containerization**: Consistent deployment across environments, ensuring that development, testing, and production remain stable.
- **Postgres Database**: Robust data handling for storing user input and generated designs.

## Learn More

To learn more about Roomify's core technologies:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about the framework powering Roomify’s frontend.
- [Go Programming Language](https://go.dev/) - Explore the backend language of Roomify.
- [Kafka Documentation](https://kafka.apache.org/documentation/) - Learn how Kafka manages asynchronous tasks.
- [Docker Documentation](https://docs.docker.com/) - Understand how Docker is used to containerize the Roomify application.

## Future of Roomify

As Roomify grows, we are continually refining the platform’s features to make interior design more accessible to everyone—from homeowners to interior designers to real estate professionals. Stay tuned for more exciting updates as we expand the platform’s capabilities and user base!

Roomify also aims to be a positive force within the UK digital community, contributing to the rapid development of AI and its application in creative industries. By leveraging advanced AI technology, Roomify showcases how digital tools can streamline traditionally labor-intensive industries like interior design. This helps to foster innovation, create new opportunities for tech-savvy professionals, and support the UK’s burgeoning digital economy. Roomify will continue to be at the forefront of AI-driven transformation in design, empowering individuals and businesses alike with user-friendly, AI-powered solutions.
