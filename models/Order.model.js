const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  phone: String,
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
