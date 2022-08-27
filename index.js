// const path = require("path");
const express = require("express"); //import express from "express";
const exphbs = require("Express-handlebars");
// const { ExpressHandlebars } = require("express-handlebars");

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "nbs",
}); //const { ExpressHandlebars } = require("express-handlebars");

const app = express();
app.engine("hbs", hbs.engine); //регистрация движка в express
app.set("view engine", "hbs"); //задание hbs по умолчанию
app.set("views", "views"); //папка с файлами по умолчанию (второй параметр - имя папки)

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "index.html"));
  res.render("index");
});
app.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "about.html"));
  res.render("about");
});

const PORT = 3000; //const PORT = express.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
