const { Router } = require("express");

const router = Router();

router.use("/category", require("./category.route"));
router.use("/order", require("./order.route"));
router.use("/services", require("./services.route"));
router.use(require("./executors.route"));

module.exports = router;
