require('dotenv').config(); // โหลด .env
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ดึงค่าจาก .env
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// เชื่อมต่อ MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // สำหรับอ่าน JSON จาก Request

// Routes
app.use('/api/users', userRoutes); // ใช้ Routing สำหรับ Users

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
