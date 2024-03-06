import mongoose from "mongoose";

/*
{
    account {
        username:
        profile_image:
    },
    content:
    rating:
    locations: [
        {
            name:
            images: []
        }
    ]
    comments: []
}
*/

const postSchema = mongoose.Schema(
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
    rating: {
      type: Number,
      required: true,
    },
    locations: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          images: {
            type: [String],
            required: true,
          },
        },
      ],
      required: true,
    },
    comments: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("post", postSchema);
