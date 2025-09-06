import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Auth route
app.use("/api", authRoutes);

// Port
app.listen(5000, () => console.log("Server running on port 5000"));
