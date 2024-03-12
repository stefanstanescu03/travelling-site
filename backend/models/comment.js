import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    account: {
      type: {
        username: {
          type: String,
          required: true,
        },
        profile_image: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("comment", commentSchema);
