import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: "https://ias-project-pj81.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Auth route
app.use("/api", authRoutes);

// Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
