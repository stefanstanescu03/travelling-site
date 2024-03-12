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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Post.findById(id);

    if (!response) {
      return res.status(404).send({ message: "Account not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Post.find();

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/user/:user", async (req, res) => {
  try {
    const { user } = req.params;

    let response = await Post.find();
    response = response.filter((post) => post.account.username === user);
    if (response.length == 0) {
      return res.status(404).send({ message: "Account not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
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

    const { id } = req.params;

    const response = await Post.findByIdAndUpdate(id, req.body);
    if (!response) {
      return res.status(404).send({ message: "Post not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Post.findByIdAndDelete(id);

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
