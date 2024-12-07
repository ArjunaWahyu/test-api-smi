const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = []; // Array untuk menyimpan user

exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Validasi apakah username sudah ada
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) return res.status(400).json({ message: "Username already exists" });

  // Hash password dan simpan user
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Cari user berdasarkan username
  const user = users.find((user) => user.username === username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // Periksa password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  // Buat JWT
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ token });
};
