const uuid = require("uuid/dist/v5");
const fs = require("fs");
const path = require("path");

class Course {
  constructor(course) {
    const { title, price, img } = course;
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = uuid();
  }

  save() {}

  static getAll() {}
}
