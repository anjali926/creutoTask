import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishDate: Date,
  },
  { timestamps: true },
);

export default mongoose.model("Book", bookSchema);
