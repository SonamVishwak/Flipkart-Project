import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 25,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 25,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
