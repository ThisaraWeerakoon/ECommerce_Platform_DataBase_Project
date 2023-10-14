const express = require('express')
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/validateLogin", userController.validateLogin);
router.post("/register", userController.register);

module.exports = router