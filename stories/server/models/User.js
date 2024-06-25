import mongoose from 'mongoose';

const userRoles = ['user', 'employee', 'admin'];

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  role: { type: String, enum: userRoles, default: 'user' },
});

const User = mongoose.model('User', UserSchema);
export default User;