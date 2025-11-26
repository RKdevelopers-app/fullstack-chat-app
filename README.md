🚀 Chatty — Real-Time Full-Stack Chat Application

Live Demo 👉 https://fullstack-chat-app-j32j.onrender.com

A full-stack real-time chat application built with MERN, WebSockets, and Zustand, featuring authentication, image messaging, online user status, profile management, and theme switching.

📸 Screenshots

Upload your screenshots to GitHub and replace the image URLs below.

🔐 Login Page
📝 Sign Up Page
💬 Chat Interface
👤 Profile Page
🎨 Theme Settings
⭐ Features
🔑 Authentication

JWT-based auth using HttpOnly cookies

Protected routes (backend + frontend)

Auto-login on refresh using /auth/check

💬 Real-Time Chat

One-to-one messaging

Typing indicator (optional)

Auto-scroll to latest message

Image upload with Cloudinary

Readable message timestamps

🟢 Live Online Status

Socket.IO real-time presence tracking

Sidebar shows online users

📂 User Profile

Upload a profile picture

Cloudinary image storage

Shows account creation date

🎨 Custom Themes

Multiple DaisyUI themes

Saved in localStorage

Live preview before applying

🗂 Clean UI & UX

Responsive layout

Skeleton loading states

Smooth animations

🏗 Tech Stack
Frontend

React + Vite

Zustand

DaisyUI + TailwindCSS

Axios

Socket.IO client

Backend

Node.js + Express

MongoDB + Mongoose

Cloudinary for image uploads

Socket.IO for real-time communication

JWT authentication

Deployment

Render

Production environment variables

Optimized static file serving

🔧 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd chat-app

🔧 Backend Setup
Install dependencies
cd backend
npm install

Create .env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODE_ENV=development

Run backend
npm run dev

🎨 Frontend Setup
Install dependencies
cd ../frontend
npm install

Run frontend
npm run dev
