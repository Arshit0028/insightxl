// routes/excelUpload.js
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/excel-upload', upload.single('excel'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    res.json({ message: 'Success', preview: data.slice(0, 5) });
  } catch (err) {
    console.error('Excel parse error:', err);
    res.status(500).json({ message: 'Error parsing file' });
  }
});

module.exports = router;
