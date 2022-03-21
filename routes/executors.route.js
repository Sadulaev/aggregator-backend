const { Router } = require('express');
const router = Router();
const { executorsController } = require('../controllers/executors.controller');
const authMiddleware = require('../midlleware/auth.middleware');

router.get("/executors", executorsController.getExecutors);
router.post("/signup",  executorsController.signUp);
router.post("/signin",  executorsController.signIn);

module.exports = router;