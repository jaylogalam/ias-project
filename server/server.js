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

// Signup route
const signupRouter = require("./routes/signup");
app.use("./api", signupRouter);

// Login route
const loginRouter = require("./routes/login");
app.use("/api", loginRouter);

// Port
app.listen(5000, () => console.log("Server running on port 5000"));