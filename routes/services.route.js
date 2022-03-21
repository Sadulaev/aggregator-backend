const { Router } = require('express');
const router = Router();
const { servicesController } = require('../controllers/services.controller');
const authMiddleware = require('../midlleware/auth.middleware');

router.get("/services", servicesController.getServices);
router.post("/services", authMiddleware, servicesController.addService);
router.delete("/services/:id", servicesController.deleteService);
router.get("/services/:id", servicesController.getServiceById);
router.get("/services/:categoryId", servicesController.getServicesByCategoryId);
router.get("/services/:executorId", servicesController.getServicesByExecutorId);


module.exports = router;