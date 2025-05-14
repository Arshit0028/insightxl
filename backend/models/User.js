import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },

  settings: {
    darkMode:    { type: Boolean, default: false },
    emailAlerts: { type: Boolean, default: true },
    // Add more settings as needed
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
