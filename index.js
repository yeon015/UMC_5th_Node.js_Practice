// const express = require("express"); // common JS
import express from "express"; // ES6
import { tempRouter } from "./src/routes/temp.route.js";
import { status } from "./config/response.status.js";
import { response } from "./config/response.js";
import { BaseError } from "./config/error.js";

// const mysql = require("mysql2");
// var db = require("./lib/db.js");

const app = express();
const port = 3000;

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const myLogger = (req, res, next) => {
//   console.log("LOGGED");
//   next();
// };

// app.use(myLogger);

// app.get("/", (req, res) => {
//   console.log("/");
//   res.send("Hello UMC!");
// });

// app.get("/hello", (req, res) => {
//   console.log("/hello");
//   res.send("Hello world!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// router setting
app.use("/temp", tempRouter);

// error handling
app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.use((err, req, res, next) => {
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
