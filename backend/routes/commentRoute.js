import express from "express";
import { Comment } from "../models/comment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.account || !req.body.content) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const newComment = {
      account: req.body.account,
      content: req.body.content,
      likes: 0,
    };

    const response = await Comment.create(newComment);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Comment.findById(id);

    if (!response) {
      return res.status(404).send({ message: "Comment not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.likes) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const { id } = req.params;

    const response = await Comment.findByIdAndUpdate(id, {
      likes: req.body.likes,
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Comment.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).send({ message: "Post not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
