import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import testRoute from "./routes/testRoute.js";
import accountRoute from "./routes/accountRoute.js";
import postRoute from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";

const app = express();

app.use(express.json());

app.use("/test", testRoute);
app.use("/accounts", accountRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
