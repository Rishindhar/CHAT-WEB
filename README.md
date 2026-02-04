# 💬 Live Chat App

This project is a real-time chat application that allows multiple users to send and receive messages instantly using Socket.io. It was developed as part of a Full Stack Development Internship task.

## Features
- Real-time messaging between users
- Automatic user labels (User 1, User 2, etc.)
- Join and leave notifications
- Responsive chat interface
- Instant message updates without page refresh

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Socket.io

## 📂 Project Structure

chat-app/  
│── server.js → Backend server with Socket.io  
│── package.json → Project configuration  
│── public/  
│   ├── index.html → Chat interface  
│   ├── style.css → Chat styling  
│   └── script.js → Frontend socket logic  

## ⚙ How It Works

1. A user opens the chat webpage.
2. The server assigns a username (User 1, User 2, etc.).
3. Messages typed by one user are sent to the server using Socket.io.
4. The server broadcasts the message to all connected users instantly.
5. Join and leave notifications are shown to all users.

## ▶ How to Run

1. Open terminal inside the project folder
2. Install dependencies using:

## 📸 Application Screenshots

![Chat App Screenshot 1](chat-output1.png)  
![Chat App Screenshot 2](chat-output2.png)

## Author  
P Rishindhar Reddy