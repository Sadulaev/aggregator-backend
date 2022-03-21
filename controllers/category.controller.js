const Category = require("../models/Category.model");

module.exports.categoriesController = {
  postCategory: async (req, res) => {
    try {
      const { title, img } = req.body;
      const category = await Category.create({
        title,
        img,
      });
      res.json(category);
    } catch (e) {
      res.json(e.toString());
    }
  },
  getCategory: async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
  getCategoryId: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
  deleteController: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
};
