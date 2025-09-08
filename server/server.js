import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL

const app = express();
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Auth route
app.use("/api", authRoutes);

// Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
