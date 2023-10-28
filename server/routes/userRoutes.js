const express = require('express')
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/validateLogin", userController.validateLogin);
router.post("/register", userController.register);
router.get("/getSession", userController.getSession);
router.get("/logout", userController.logout);
router.get("/userDetails", userController.userDetails);
router.post("/userAddress", userController.userAddress);
router.post("/userPayment", userController.userPayment);
router.get("/orderHistory", userController.orderHistory);
router.get("/cartItems", userController.cartItems);

module.exports = router