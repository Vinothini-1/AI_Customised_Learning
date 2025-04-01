import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import bcrypt from "bcryptjs";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config();

// Import routes and models
import {User} from "./models/User.js";
import {contactRoutes} from "./routes/contact.js";
import {profileRoutes} from "./routes/profile_route.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://your-production-frontend.com"
    ];

    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy error: Origin not allowed"), false);
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_generated_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

// MongoDB Connection
const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      setTimeout(connectWithRetry, 5001); // Retry after 5 seconds
    });
};
connectWithRetry();

// 🔹 User Registration
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, mobile, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// 🔹 User Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    req.session.user = { id: user._id, name: user.name, email: user.email };
    res.json({ msg: "Login successful", user: req.session.user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// 🔹 Hugging Face API - Course Categorization
const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-mnli";
const HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;

app.post("/categorize", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  try {
    const headers = { Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`, "Content-Type": "application/json" };
    const response = await axios.post(
      HUGGING_FACE_API_URL,
      { inputs: content, parameters: { candidate_labels: ["Basic", "Intermediate", "Advanced"] } },
      { headers }
    );

    const { labels, scores } = response.data;
    if (labels && labels.length > 0) {
      return res.json({ keywords: [], category: labels[0] });
    } else {
      return res.status(500).json({ error: "No labels found in the response" });
    }
  } catch (error) {
    console.error("Error processing the content:", error);
    res.status(500).json({ error: "An error occurred while processing the content" });
  }
});

// 🔹 Google Gemini AI Integration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/generate", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const prompt = req.body.prompt;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = result.response.candidates[0]?.content?.parts[0]?.text || "No response";
    res.json({ response: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message });
  }
});

// 🔹 API Routes
app.use("/api/contactus", contactRoutes);
app.use("/api/profile", profileRoutes);

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
