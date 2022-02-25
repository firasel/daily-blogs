import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgUrl: { type: String },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.models.Posts || mongoose.model("Posts", PostSchema);
