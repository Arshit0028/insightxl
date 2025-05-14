const User = require('../models/User');

// Save or update settings
exports.updateSettings = async (req, res) => {
  const userId = req.userId; // assuming auth middleware sets this
  const { settings } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { settings },
      { new: true }
    );
    res.json({ success: true, settings: user.settings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

// Get settings
exports.getSettings = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    res.json({ success: true, settings: user.settings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};
