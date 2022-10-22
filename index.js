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

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.listen(port, () => {
  console.log("Dragon is running");
});
