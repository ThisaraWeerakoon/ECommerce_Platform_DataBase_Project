const express = require('express')
const router = express.Router();
const reportsController = require('../controllers/reportsController');

router.get("/getCategoryBasedOrders", reportsController.getCategoryBasedOrders);
router.get("/getTopSelling", reportsController.getTopSelling);
router.post("/getQuarterlyReports", reportsController.getQuarterlyReports);
router.get("/getOrders", reportsController.getOrders);
router.get("/getOrder", reportsController.getOrderCount);
router.get("/getProducts", reportsController.getProducts);
router.get("/getUsers", reportsController.getUsers);
router.get("/getCustomer", reportsController.getCustomer);

module.exports = router