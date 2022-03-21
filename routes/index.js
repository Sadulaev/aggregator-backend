const { Router } = require("express");

const router = Router();

router.use("/category", require("./category.route"));
router.use("/order", require("./order.route"));

module.exports = router;
