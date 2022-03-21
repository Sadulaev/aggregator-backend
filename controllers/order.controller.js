const Order = require("../models/Order.model");

module.exports.ordersController = {
  postOrder: async (req, res) => {
    try {
      const { name, phone, service } = req.body;
      const order = await Order.create({
        name,
        phone,
        service,
      });
      res.json(order);
    } catch (e) {
      res.json(e);
    }
  },
  getOrder: async (req, res) => {
    try {
      const order = await Order.find();
      res.json(order);
    } catch (e) {
      res.json(e);
    }
  },
  getOrderId: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      res.json(order);
    } catch (e) {
      res.json(e);
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);
      res.json(order);
    } catch (e) {
      res.json(e);
    }
  },
};
