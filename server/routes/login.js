const db = require("../config/db");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sqlUser = "SELECT * FROM users WHERE username = ?";
  db.query(sqlUser, [username], (err, results) => {
    // Generic error
    if (err) return res.status(500).json({ error: err.message });

    // Check if username exist
    if (results.length === 0) {
      return res.status(404).json({ message: "Username does not exist" });
    }

    // Check if password is correct
    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const sql = "SELECT * FROM users WHERE username = ? AND password_hash = ?";
    db.query(sql, [username, passwordHash], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length > 0) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    });
  });
});

module.exports = router;
