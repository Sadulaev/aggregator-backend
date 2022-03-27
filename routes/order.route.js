const { Router } = require("express");
const { ordersController } = require("../controllers/order.controller");
const authMiddleware = require("../midlleware/auth.middleware");

const router = Router();

router.post("/post", ordersController.postOrder);
router.get("/", ordersController.getOrder);
router.get("/:id", ordersController.getOrderId);
router.delete("/:id", ordersController.deleteOrder);
router.get('/service/:id', ordersController.getOrdersByServiceId )
router.get('/executor/:id', ordersController.getOrdersByExecutorId)

module.exports = router;
