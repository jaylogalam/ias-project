import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    origin: "https://ias-project-pj81.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Serve static frontend build
app.use(express.static(path.join(__dirname, "dist")));

// Auth route
app.use("/api", authRoutes);

// React Router fallback — send index.html for everything else
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // adjust path if needed
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
