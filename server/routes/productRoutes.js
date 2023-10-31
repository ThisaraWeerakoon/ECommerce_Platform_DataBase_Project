const express = require('express')
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/getCarouselImages", productController.getCarouselImages);
router.get("/getInventory", productController.getInventory);

module.exports = router