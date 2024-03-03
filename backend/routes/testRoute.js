import express from "express";
import { Test } from "../models/test.js";

const router = express.Router();

// Test to see if database is working
router.get("/", async (req, res) => {
  try {
    const testMessage = await Test.find({});
    return res.status(200).json(testMessage);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
