const express = require('express')
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/getCarouselImages", productController.getCarouselImages);

module.exports = router