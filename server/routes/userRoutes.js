const express = require('express')
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/validateLogin", userController.validateLogin);
router.post("/register", userController.register);
router.get("/getSession", userController.getSession);
router.get("/getSession2", userController.getSession2);
router.get("/logout", userController.logout);
router.post("/addAdmin", userController.addAdmin);
router.get("/userDetails", userController.userDetails);
router.post("/userAddress", userController.userAddress);
router.post("/userPayment", userController.userPayment);
router.get("/orderHistory", userController.orderHistory);
router.get("/cartItems", userController.cartItems);
router.post("/removeCartItems", userController.removeCartItems);
router.get("/totalPrice", userController.totalPrice);
router.get("/getuserPayment", userController.getuserPayment);
router.get("/getuserAddress", userController.getuserAddress);
router.post("/userOrder", userController.userOrder);
router.post("/userOrder2", userController.userOrder2);
router.post("/userOrder3", userController.userOrder3);

router.post("/getUsers", userController.getUsers);

module.exports = router