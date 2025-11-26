<h1 style="font-size: 36px; margin-bottom: 10px;">🚀 Chatty — Real-Time Full-Stack Chat Application</h1>

Live Demo 👉 https://fullstack-chat-app-j32j.onrender.com

A full-stack real-time chat application built with MERN, WebSockets, and Zustand, featuring secure authentication, image messaging, online user status, profile management, and theme switching.

---

## ⭐ Features

### 🔑 Authentication
- JWT-based auth using HttpOnly cookies
- Protected routes (backend + frontend)
- Auto-login on refresh using `/auth/check`

### 💬 Real-Time Chat
- One-to-one messaging  
- Typing indicator (optional)
- Auto-scroll to latest message
- Image upload with Cloudinary
- Readable message timestamps

### 🟢 Live Online Status
- Socket.IO real-time user presence tracking
- Sidebar shows currently online users

### 📂 User Profile
- Upload profile picture
- Cloudinary storage
- Shows account creation date

### 🎨 Custom Themes
- Multiple DaisyUI themes  
- Saved in localStorage  
- Live preview switching

### 🗂 Clean UI & UX
- Responsive layout
- Skeleton loading states
- Smooth animations

---

## 🏗 Tech Stack

### **Frontend**
- React + Vite  
- Zustand (state management)  
- DaisyUI + TailwindCSS  
- Axios  
- Socket.IO Client  

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- Cloudinary for uploads  
- Socket.IO for real-time events  
- JWT authentication  

### **Deployment**
- Render (full-stack deployment)
- Cloudinary (image hosting)
- Production environment variables
- Optimized build + static file serving

---

## 📸 Screenshots

<div style="display:flex; gap:12px; overflow-x:auto; padding:10px 0;">

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.48.12.png?raw=true" width="320" />
    <div style="font-size:12px; margin-top:6px;">📝 Sign Up Page</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a08407509884220cb8413eb2da1ca72aa2c10bbb/screenshots/Screenshot%202025-11-26%20at%2014.35.36.png?raw=true" width="320" />
    <div style="font-size:12px; margin-top:6px;">🔐 Login Page</div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center; min-width:320px;">
    <img src="https://github.com/RKdevelopers-app/fullstack-chat-app/blob/a0840
