import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, ref:'users' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String },
    tags: {
      type: [String],
      default: [],
    },
    publish: {
      type: Boolean,
      default: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.models.Posts || mongoose.model("Posts", PostSchema);
