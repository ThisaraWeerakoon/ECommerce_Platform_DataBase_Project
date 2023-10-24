const express = require('express')
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/validateLogin", userController.validateLogin);
router.post("/register", userController.register);
router.get("/getSession", userController.getSession);
router.get("/logout", userController.logout);


module.exports = router