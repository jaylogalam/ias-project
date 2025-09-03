const db = require("../config/db");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();

router.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  // Hash password
  const passwordHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
  db.query(sql, [username, passwordHash], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User registered" });
  });
});

module.exports = router;
