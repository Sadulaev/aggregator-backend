const { Router } = require('express');
const router = Router();
const { servicesController } = require('../controllers/services.controller');
const authMiddleware = require('../midlleware/auth.middleware');

router.get("/", servicesController.getServices);
router.post("/", authMiddleware, servicesController.addService);
router.delete("/:id", authMiddleware, servicesController.deleteService);
router.get("/:id", servicesController.getServiceById);
router.get("/category/:categoryId", servicesController.getServicesByCategoryId);
router.get("/executor/user", authMiddleware, servicesController.getServicesByExecutorId);


module.exports = router;