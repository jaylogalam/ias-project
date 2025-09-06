import supabase from "../config/db.js";
import { useHashPassword } from "../utils/useHashPassword.js";

// Signup
export const signup = async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = useHashPassword(password);

  const { error } = await supabase
    .from("users")
    .insert([{ username, password: passwordHash, status: 0 }]);

  if (error) return res.status(500).json({ error: "Username already taken" });
  res.status(201).json({ message: "User registered" });
};

// Login
export const login = async (req, res) => {
  const { username, password } = req.body;

  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .limit(1);

  if (error) return res.status(500).json({ error: error.message });

  if (users.length === 0) {
    return res.status(404).json({ message: "Username does not exist" });
  }

  const user = users[0];

  if (user.status === true) {
    return res
      .status(423)
      .json({ message: "Account is locked. Please try again later" });
  }

  const passwordHash = useHashPassword(password);
  if (user.password !== passwordHash) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  res.json({ message: "Login successful" });
};

export const setStatus = async (req, res) => {
  const { username, status } = req.body;

  const { error } = await supabase
    .from("users")
    .update({ status })
    .eq("username", username);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Status updated" });
};

export const recovery = async (req, res) => {
  const { username, password } = req.body;

  // Look for username
    const { data: users, errorNotFound } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
    .limit(1);
  
  if (errorNotFound) return res.status(500).json({ error: error.message });
  
    if (users.length === 0) {
      return res.status(404).json({ message: "Username does not exist" });
    }
  
  // Set new password
  const passwordHash = useHashPassword(password);

  const { error } = await supabase
    .from("users")
    .update([{ username, password: passwordHash }])
    .eq("username", username);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Password updated successfully" });
};