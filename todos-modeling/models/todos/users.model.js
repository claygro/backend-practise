import mongoose from "mongoose";
//first import mongoose.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      //required check the username is exist in the username field.
      unique: true,
      lowercase: true,
      //if we wanna receive username in lowercase.
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      //in the array if the password is true then it is true but if the password is not given by user then the password is required is show to the user.
      //we can give custom message too in mongoose.
    },
  },
  { timestamps: true }
);
//defines the structure and property of the document in the MongoDB collection.
//it takes an object.
//in this object we put all the data.
export const User = mongoose.model("User", userSchema);
//we export userSchema in unique way.
//mongoose have model method which takes two parameter.
//the model always ask which model to make and on what basis to make model.
// so we defined make a model for user on the basis of userSchema.
