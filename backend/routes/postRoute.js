import express from "express";
import { Post } from "../models/post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.account ||
      !req.body.content ||
      !req.body.rating ||
      !req.body.locations ||
      !req.body.comments
    ) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const newPost = {
      account: req.body.account,
      content: req.body.content,
      rating: req.body.rating,
      locations: req.body.locations,
      comments: req.body.comments,
    };

    const response = await Post.create(newPost);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
