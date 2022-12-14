const { Router } = require("express");
const router = Router();
const Course = require("../models/course");

router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить курс",
  });
});

router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.redirect("/courses");
});

module.exports = router;
