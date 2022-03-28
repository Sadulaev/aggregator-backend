const { Router } = require('express');
const router = Router();
const { servicesController } = require('../controllers/services.controller');
const authMiddleware = require('../midlleware/auth.middleware');
const upload = require("../midlleware/upload")

router.get("/", servicesController.getServices);
router.post("/", authMiddleware, upload.array('images', 10), servicesController.addService);
router.delete("/:id", authMiddleware, servicesController.deleteService);
router.get("/:id", servicesController.getServiceById);
router.get("/category/:categoryId", servicesController.getServicesByCategoryId);
router.get("/executor/user", authMiddleware, servicesController.getServicesByExecutorId);

//Роуты к созданным контроллерам для личного кабинета. Также без необходимости не менять.
router.patch("/executor/edit/:id", servicesController.editServiceById)
router.delete("/executor/remove/:id", servicesController.removeServiceById)


module.exports = router;