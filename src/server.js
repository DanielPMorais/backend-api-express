//const express = require('express')
import express from "express";
import userRouter from "./routers/userRouter.js";
import publicationRouter from "./routers/publicationRouter.js";
import authRouter from "./routers/authRouter.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { error404 } from "./middlewares/error404.js";

const app = express();
const port = 3000;

app.use(logger);
app.use(express.json());
// req.body

app.get("/", (req, res) => {
  res.json({ message: "Hello World Express API!" });
});

app.use("/user", userRouter);
app.use("/publication", publicationRouter);
app.use("/auth", authRouter);

app.use(error404);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
