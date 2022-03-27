const Order = require("../models/Order.model");

module.exports.ordersController = {
  postOrder: async (req, res) => {
    try {
      const { name, phone, serviceId, executorId } = req.body;
      const order = await Order.create({
        name,
        phone,
        serviceId,
        executorId,
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

  //Для личного кабинета
  getOrdersByExecutorId: async (req, res) => {
    try {
      const ordersByExecutorId = await Order.find({ executorId: req.params.id });
      res.json(ordersByExecutorId);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  getOrdersByServiceId: async (req, res) => {
    try {
      const ordersByServiceId = await Order.find({ serviceId: req.params });
      res.json(ordersByServiceId);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  }
};
