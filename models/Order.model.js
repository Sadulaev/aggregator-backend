const mongoose = require("mongoose");
const moment = require('moment');


const orderSchema = mongoose.Schema({
  name: String,
  phone: String,
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  executorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Executor"
  },
  time: {
    type:String,
    default: moment().format()
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
