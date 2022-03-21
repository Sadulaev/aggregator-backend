const { Router } = require("express");
const { categoriesController } = require("../controllers/category.controller");

const router = Router();

router.post("/", categoriesController.postCategory);
router.get("/", categoriesController.getCategory);
router.get("/:id", categoriesController.getCategoryId);
router.delete("/:id", categoriesController.deleteController);

module.exports = router;
