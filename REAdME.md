# Roomify.org - AI-Powered Interior Design

Roomify.org is a SaaS platform that leverages artificial intelligence to revolutionize the interior design industry. The architecture is designed using microservices and is composed of various backend services for managing users, design requests, email notifications, and image generation. The frontend is built with Next.js, and all microservices interact using gRPC for synchronous calls and Kafka for asynchronous processing. Cloudflare is used for serving static images, while Postgres handles data storage. Roomify empowers users to create personalized, high-quality interior designs tailored to their preferences within seconds. By simply providing details such as room type, preferred style, and color palette, users can generate realistic visuals of their ideal space through a sophisticated AI model.

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

## Components
1. **Frontend (Next.js)**
   - Developed with TypeScript and React.
   - Handles user interactions, design submissions, and rendering of design results.
   - Communicates with backend services via the **API Gateway**.

2. **API Gateway**
   - Acts as a reverse proxy that routes requests from the frontend to backend microservices.
   - Manages security (authentication, authorization), logging, rate limiting, and routing.

3. **Backend Microservices**
   - **User Service**: Manages user authentication, profile updates, password resets, etc. Exposes both public and private routes (e.g., `/signup`, `/login`, `/requestpasswordreset`, `/users`, `/updateuserprofile`, etc.).
   - **Design Service**: Processes design requests and stores the generated image URLs.
   - **Mail Service**: Sends notifications and password reset emails via gRPC.
   - **ImageGeneration Service**: Handles AI model interactions for image generation.
   - **ImageResponse Service**: Receives the results of the image generation and communicates back to the design service.
   
4. **Communication**
   - **API Gateway**: All client requests are routed through the API Gateway to the appropriate service.
   - **gRPC**: Synchronous communication between microservices (e.g., User Service and Mail Service).
   - **Kafka**: Asynchronous messaging for tasks such as image generation (between Design, ImageGeneration, and ImageResponse services).

5. **External Services**
   - **Cloudflare**: Hosts static assets such as generated images for faster delivery.

6. **Database**
   - **Postgres**: Stores user data, design requests, and image URLs.

## Architecture Flow

### 1. User Service Flow
   - **Frontend** communicates with **User Service** (via API Gateway) for user management (signup, login, profile updates).
   - **User Service** stores user data in **Postgres** (User Database).
   - **User Service** communicates with **Mail Service** (via gRPC) for sending emails.
   
### 2. Design Service Flow
   - **Frontend** submits design requests to **Design Service** (via API Gateway).
   - **Design Service** stores design metadata in **Postgres** (Design Database).
   - **Design Service** sends a message to **ImageGeneration Service** via **Kafka** for image processing.
   
### 3. Image Generation and Response Flow
   - **ImageGeneration Service** receives requests from **Design Service** (via Kafka) and processes them using the AI model.
   - Once the image is generated, **ImageGeneration Service** sends a message to **ImageResponse Service** (via Kafka).
   - **ImageResponse Service** communicates back to **Design Service** with the generated image URL (via REST API).
   - **Design Service** stores the image URL in **Postgres**.

### 4. Final Design Result
   - **Frontend** fetches the design result (image URL) from **Design Service** (via API Gateway) and displays it to the user.
   - Static images are served via **Cloudflare** for better performance.

## Data Flows

- **User Data**: Managed by **User Service** and stored in the **User Database (Postgres)**.
- **Design Requests**: Processed by **Design Service** and stored in the **Design Database (Postgres)**.
- **Image Generation**: Managed asynchronously between **Design Service**, **ImageGeneration Service**, and **ImageResponse Service** using **Kafka**.
- **Static Images**: Hosted and delivered by **Cloudflare**.

## Diagram Sketch

You can create the following architecture diagram using any of the tools like Draw.io, Lucidchart, or Figma:
- **Frontend** → **API Gateway** → **User Service** / **Design Service**
- **User Service** ↔ **Mail Service** (gRPC)
- **Design Service** ↔ **ImageGeneration Service** (Kafka)
- **ImageGeneration Service** ↔ **ImageResponse Service** (Kafka)
- **Design Service** ↔ **Postgres**
- **Frontend** ← **API Gateway** ← **Design Service** (returns the design result)
- **Cloudflare** serves static images.

## Learn More

To learn more about Roomify's core technologies:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about the framework powering Roomify’s frontend.
- [Go Programming Language](https://go.dev/) - Explore the backend language of Roomify.
- [Kafka Documentation](https://kafka.apache.org/documentation/) - Learn how Kafka manages asynchronous tasks.
- [Docker Documentation](https://docs.docker.com/) - Understand how Docker is used to containerize the Roomify application.

## Future of Roomify

As Roomify grows, we are continually refining the platform’s features to make interior design more accessible to everyone—from homeowners to interior designers to real estate professionals. Stay tuned for more exciting updates as we expand the platform’s capabilities and user base!

Roomify also aims to be a positive force within the UK digital community, contributing to the rapid development of AI and its application in creative industries. By leveraging advanced AI technology, Roomify showcases how digital tools can streamline traditionally labor-intensive industries like interior design. This helps to foster innovation, create new opportunities for tech-savvy professionals, and support the UK’s burgeoning digital economy. Roomify will continue to be at the forefront of AI-driven transformation in design, empowering individuals and businesses alike with user-friendly, AI-powered solutions.