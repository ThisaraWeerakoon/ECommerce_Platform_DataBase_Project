const express = require('express')
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/getCarouselImages", productController.getCarouselImages);
router.get("/getCategories",productController.getCategories);
router.get("/getSubCategories",productController.getSubCategories);
router.post("/postCategoryID",productController.postCategoryID);
router.get("/getProducts",productController.getProducts);
router.get("/getProductItemDetails",productController.getProductItemDetails);
router.get("/getVariantTypes",productController.getVariantTypes);
router.get("/getVariantOptions",productController.getVariantOptions);
router.get("/getVariantTypesAndOptions",productController.getVariantTypesAndOptions);
router.get("/getVariantsByOptions",productController.getVariantsByOptions);
router.get("/getVariantItemDetails",productController.getVariantItemDetails);
router.get("/insertCartItem",productController.insertCartItem);
router.get("/getInventory", productController.getInventory);

module.exports = router