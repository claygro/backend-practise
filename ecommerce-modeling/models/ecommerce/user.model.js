import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    //what thing the user need to put to access the ecommerce website.
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const user = mongoose.model("User", userSchema);
