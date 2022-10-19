const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const cagegories = require("./data/categories.json");

const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/categories", (req, res) => {
  res.send(cagegories);
});

app.get("/news", (req, res) => {
  res.send(news);
});
app.listen(port, () => {
  console.log("Dragon is running");
});
