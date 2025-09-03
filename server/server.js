const express = require('express')
const mysql = require('mysql2')
const crypto = require('crypto')

const app = express();
app.use(express.json());

// Connect to DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "auth",
});

// Signup route
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  // Hash password
  const passwordHash = crypto
    .createHash("sha256")
    .update(password)
        .digest("hex");
    
    const sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
  db.query(sql, [username, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User registered" });
    }
  );
});

// Login route
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const passwordHash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
    
    const sql = "SELECT * FROM users WHERE username = ? AND password_hash = ?";
    db.query(sql, [username, passwordHash], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length > 0) {
        res.json({ message: "✅ Login successful" });
      } else {
        res.status(401).json({ message: "❌ Invalid credentials" });
      }
    });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));