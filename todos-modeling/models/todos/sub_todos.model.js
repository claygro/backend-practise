import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      res: "User",
    },
  },
  { timestamps: true }
);
export const subTodo = mongoose.model(("subTodo", todoSchema));
//in mongodb the name of Todo will be todos.
