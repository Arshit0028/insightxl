const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/auth'); // protect route

router.get('/', authMiddleware, settingsController.getSettings);
router.post('/', authMiddleware, settingsController.updateSettings);

module.exports = router;
