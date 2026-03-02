# Dockerized Three-Tier Application Deployment

## 📌 Project Overview

This project demonstrates a production-ready three-tier architecture using:

- Docker
- Docker Compose
- Nginx
- Node.js
- MySQL

The application is containerized and deployed using a multi-container setup.

---

## 🏗 Architecture

Client → Nginx (Reverse Proxy) → Node.js Backend → MySQL Database

---

## 🛠 Technologies Used

- Docker
- Docker Compose
- Nginx
- Node.js
- MySQL
- Ubuntu (AWS EC2)

---

## 📂 Project Structure

docker-three-tier-app/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   └── nginx.conf
│
├── docker-compose.yml
└── README.md

---

## 🚀 How to Run the Project

### Step 1: Clone Repository

git clone git@github.com:boreddydivakarreddy/docker-three-tier-app.git

### Step 2: Go to Project Folder

cd docker-three-tier-app

### Step 3: Build and Start Containers

docker-compose up --build

---

## 🌐 Access Application

Open browser:

http://<EC2-Public-IP>

Example:
http://3.83.26.155

---

## 🔥 Key Features

- Multi-container architecture
- Reverse proxy configuration using Nginx
- Service communication using Docker network
- Persistent MySQL database
- Environment consistency
- Production-style deployment

---

## 📈 DevOps Concepts Demonstrated

- Containerization
- Orchestration using Docker Compose
- Reverse proxy setup
- Infrastructure provisioning
- Debugging container startup issues
- Service dependency handling

---

## 👨‍💻 Author

Boreddy Naga Divakar Reddy
