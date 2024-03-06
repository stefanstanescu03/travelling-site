import mongoose from "mongoose";

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    favourites: {
      type: [String],
      equired: true,
    },
  },
  { timestamps: true }
);

export const Account = mongoose.model("account", accountSchema);
