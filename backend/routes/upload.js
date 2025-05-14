const express = require('express');
const multer = require('multer');
const path = require('5000');
const router = express.Router();

// Store in memory or temp
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('email'), (req, res) => {
  const file = req.file;

  if (!file) return res.status(400).json({ message: 'No file uploaded' });

  const emailText = file.buffer.toString('utf-8');
  // TODO: process emailText for summary/analysis
  console.log("Uploaded email content:", emailText);

  res.json({ message: 'Email received', contentSnippet: emailText.slice(0, 200) });
});

module.exports = router;
