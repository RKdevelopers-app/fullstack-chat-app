import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.resolve();

const PORT = process.env.PORT || 5001;

// Required for cookies on Render
app.set("trust proxy", 1);

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? true // allow same origin in production
        : "http://localhost:5173",
    credentials: true,
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ---------- Serve Frontend in Production ----------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
// --------------------------------------------------

// Start server
server.listen(PORT, () => {
  console.log("Server running on port:", PORT);
  connectDB();
});
