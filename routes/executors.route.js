const { Router } = require('express');
const router = Router();
const { executorsController } = require('../controllers/executors.controller');
const authMiddleware = require('../midlleware/auth.middleware');

router.get("/executors", executorsController.getExecutors);
router.get("/executor", authMiddleware, executorsController.getExecutorById);
router.get("/executor/:id", executorsController.getExecutorByParamsId);
router.post("/signup",  executorsController.signUp);
router.post("/signin",  executorsController.signIn);

//Роуты для личного кабинета. Без необходимости не трогать
router.patch("/executor/patch", authMiddleware, executorsController.editExecutor)

module.exports = router;