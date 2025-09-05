const db = require("../config/db");
const { useHashPassword } = require("../utils/useHashPassword");

// Signup
exports.signup = (req, res) => {
    const { username, password } = req.body;

    // Hash password
    const passwordHash = useHashPassword(password)

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, passwordHash], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User registered" });
    });
}

// Login
exports.login = (req, res) => {
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
    const passwordHash = useHashPassword(password)

    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username, passwordHash], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length > 0) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    });
  });
}