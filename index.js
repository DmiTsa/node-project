const express = require("express"); //import express from "express";
const exphbs = require("Express-handlebars"); // const { ExpressHandlebars } = require("express-handlebars");

//routes
const homeRoutes = require("./routes/home");
const coursesRoutes = require("./routes/courses");
const addRoutes = require("./routes/add");

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "nbs",
});
//---------------------Настройка приложения----------------
const app = express();
app.engine("hbs", hbs.engine); //регистрация движка в express
app.set("view engine", "hbs"); //задание hbs по умолчанию
app.set("views", "views"); //папка с файлами html по умолчанию (второй параметр - имя папки)
app.use(express.static("public")); //папка со статическими файлами по умолчанию

//---------------------Роуты (мепинги) страниц----------------
app.use("/", homeRoutes);
app.use("/courses", coursesRoutes);
app.use("/add", addRoutes);

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "Курсы",
  });
});
app.get("/add", (req, res) => {
  res.render("add", {
    title: "Добавить курс",
  });
});

//---------------------Сервер----------------
const PORT = 3000; //const PORT = express.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
