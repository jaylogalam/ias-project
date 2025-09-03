const express = require('express')
const cors = require('cors')

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json())

// Auth route
const authRoutes = require("./routes/authRoute")
app.use("/api", authRoutes);

// Port
app.listen(5000, () => console.log("Server running on port 5000"));