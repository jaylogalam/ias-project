const supabase = require("../config/db");
const { useHashPassword } = require("../utils/useHashPassword");

// Signup
exports.signup = (req, res) => {
  const { username, password } = req.body;

  // Hash password
  const passwordHash = useHashPassword(password);

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, passwordHash], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User registered" });
  });
};

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

    // Check if account is locked
    const user = results[0]

    if (user.status === 1) {
      return res
        .status(423)
        .json({ message: "Account is locked. Please try again later" });
    }

    // Check if password is correct
    const passwordHash = useHashPassword(password);
    if (user.password !== passwordHash) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Success
    res.json({ message: "Login successful" });
  });
};

exports.setStatus = (req, res) => {
  const { username, status } = req.body;

  const sql = "UPDATE users SET status = ? WHERE username = ?";
  db.query(sql, [status, username], (err, results) => {
    // Generic error
    if (err) return res.status(500).json({ error: err.message });
  });
};
