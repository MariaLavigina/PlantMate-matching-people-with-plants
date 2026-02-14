import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = './users.json';

// Helper to read users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
};

// Helper to write users
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register
app.post('/register', (req, res) => {
  const { name, lastName, email, phone, password } = req.body;
  const users = readUsers();
  const existing = users.find(u => u.email === email);
  if (existing) return res.status(400).json({ message: 'User already exists' });

  const newUser = { id: Date.now(), name, lastName, email, phone, password };
  users.push(newUser);
  writeUsers(users);

  res.json({ message: 'User registered successfully', user: newUser });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  res.json({ message: 'Login successful', user });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
