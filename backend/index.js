import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  return res.status(234).send("It Works!");
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});