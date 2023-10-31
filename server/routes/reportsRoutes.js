const express = require('express')
const router = express.Router();
const reportsController = require('../controllers/reportsController');

router.get("/getCategoryBasedOrders", reportsController.getCategoryBasedOrders);
router.get("/getTopSelling", reportsController.getTopSelling);
router.get("/getQuarterlyReports", reportsController.getQuarterlyReports);
router.get("/getOrders", reportsController.getOrders);

module.exports = router