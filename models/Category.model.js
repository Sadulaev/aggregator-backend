const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: String,
  img: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
