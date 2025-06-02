import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  //timestanps is used to detect what data is added and when it is modified
);
export const category = mongoose.model("category", categorySchema);
