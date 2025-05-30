import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('❌ Registration Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}); 

// ✅ Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    // Generate JWT token
    const payload = {
      userId: user._id,
      fullName: user.fullName,
      email: user.email
    };

    // Create and sign the token with expiration
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return success response with token
    res.status(200).json({
      message: 'Login successful',
      token, // Send token to client
      user: {
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (err) {
    console.error('❌ Login Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
