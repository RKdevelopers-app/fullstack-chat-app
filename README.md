🚀 Chatty — Real-Time MERN Chat App

Live Demo: https://fullstack-chat-app-j32j.onrender.com

(Backend may take a few seconds to wake up on free Render plan)

Chatty is a full-stack real-time chat application built using the MERN stack, featuring secure authentication, one-to-one messaging, image sharing, online user tracking, and a beautiful modern UI.

📌 Features
🔐 Authentication

JWT-based auth with HttpOnly cookies

Signup, Login, Logout

Auto-auth on page refresh (/auth/check)

Protected routes on frontend & backend

💬 Real-Time Messaging

Instant message delivery using Socket.IO

Live online/offline indicators

Auto-scroll to latest message

Chat image support (via Cloudinary)

🧠 State Management (Zustand)

Auth store – user, login/logout, socket connection

Chat store – users list, messages, live listeners

Theme store – persistent theme preference

🎨 UI / UX

Responsive layout

Modern design using TailwindCSS + DaisyUI

Profile page with avatar upload

Settings page with theme selector

Smooth transitions & animations

☁️ File Uploads (Cloudinary)

Profile image uploads

Chat image attachments

🏗️ Tech Stack
Frontend

React

Vite

Zustand

Axios

Socket.IO Client

DaisyUI + TailwindCSS

Backend

Node.js

Express

MongoDB + Mongoose

JWT + Cookies

Socket.IO

Cloudinary

Deployment

Render (Backend & Frontend build)

Cloudinary for image storage

📸 Screenshots

(You can add screenshots later — I can help you generate some neat ones!)

⚙️ Installation & Setup (Local)
1️⃣ Clone the repo
git clone https://github.com/yourusername/chat-app.git
cd chat-app

2️⃣ Install dependencies

Backend

cd backend
npm install


Frontend

cd ../frontend
npm install

3️⃣ Create Environment Variables
/backend/.env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
NODE_ENV=development
PORT=5001

4️⃣ Run the app
Backend
cd backend
npm run dev

Frontend
cd frontend
npm run dev

🏁 Production Build
Build frontend & start backend

From project root:

npm run build
npm start