<h1 style="font-size: 36px;">🚀 Chatty — Real-Time Full-Stack Chat Application</h1>

Live Demo 👉 https://fullstack-chat-app-j32j.onrender.com

A full-stack real-time chat application built with MERN, WebSockets, and Zustand, featuring authentication, image messaging, online user status, profile management, and theme switching.



## 📸 Screenshots

<div style="display:flex; gap:12px; overflow-x:auto; padding:10px 0; align-items:flex-start;">

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.48.12.png?raw=true" width="320" alt="Signup Page" />
    <div style="font-size:12px; margin-top:6px;">📝 Sign Up Page</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.35.36.png?raw=true" width="320" alt="Login Page" />
    <div style="font-size:12px; margin-top:6px;">🔐 Login Page</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.36.55.png?raw=true" width="320" alt="Chat Interface" />
    <div style="font-size:12px; margin-top:6px;">💬 Chat Interface</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.37.26.png?raw=true" width="320" alt="Settings Page" />
    <div style="font-size:12px; margin-top:6px;">🎨 Settings</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.37.29.png?raw=true" width="320" alt="Profile Page" />
    <div style="font-size:12px; margin-top:6px;">👤 Profile Page</div>
  </div>

</div>




⭐ Features

🔑 Authentication

• JWT-based auth using httpOnly cookies

• Protected routes (backend + frontend)

• Auto-login on refresh using /auth/check

💬 Real-Time Chat

• One-to-one messaging

• Typing indicator (optional)

• Auto-scroll to latest message

• Image upload with Cloudinary

• Readable message timestamps

🟢 Live Online Status

• Socket.IO real-time user presence tracking

• Sidebar shows who is currently online

📂 User Profile

• Upload a profile picture

• Cloudinary storage

• Display account creation date

🎨 Custom Themes

• Multiple DaisyUI themes

• Saved in localStorage

• Live preview before applying

🗂 Clean UI & UX

• Responsive layout

• Skeleton loading states

• Smooth animations



🏗 Tech Stack

Frontend

• React + Vite

• Zustand (state management)

• DaisyUI + TailwindCSS

• Axios

• Socket.IO client

Backend

• Node.js + Express

• MongoDB + Mongoose

• Cloudinary for image uploads

• Socket.IO for real-time communication

• JWT authentication

Deployment

• Render (full-stack deployment)

• Environment variables for production

• Optimized build and static file serving




🔧 Installation & Setup

1️⃣ Clone the repo

git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

cd chat-app

2️⃣ Backend Setup

Install dependencies

cd backend

npm install

Create .env file

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_key

CLOUDINARY_API_SECRET=your_cloudinary_secret

NODE_ENV=development

Run backend

npm run dev

3️⃣ Frontend Setup

Install dependencies

cd ../frontend

npm install

Run frontend

npm run dev
