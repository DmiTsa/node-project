const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить курс",
  });
});

router.post("/", (req, res) => {
  const course = new Course(req.body);
  course.save();
  res.redirect("/courses");
});

module.exports = router;
