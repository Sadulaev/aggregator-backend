const { Router } = require("express");
const { ordersController } = require("../controllers/order.controller");

const router = Router();

router.post("/", ordersController.postOrder);
router.get("/", ordersController.getOrder);
router.get("/:id", ordersController.getOrderId);
router.delete("/:id", ordersController.deleteOrder);

module.exports = router;
