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

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5001;

// Render requires this for cookies
app.set("trust proxy", 1);

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// CORS (Allow same origin on Render)
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? true // allow same origin automatically
        : "http://localhost:5173",
    credentials: true,
  })
);

// Backend API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production: Serve Frontend Dist Folder
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(distPath));

  // Fallback for React Router
  app.get("/*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Start Server
server.listen(PORT, () => {
  console.log("Server started on port:", PORT);
  connectDB();
});
