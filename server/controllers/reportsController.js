const Report = require("../models/reportsModels");
const reportObj = new Report();

module.exports = {
  getCategoryBasedOrders: async (req, res) => {
    try {
      const categoryResultArray = [];
      const categoryResult = await reportObj.getOrderCategories();
      console.log("userResult: ", categoryResult);

      console.log(categoryResult);
      for (let i = 0; i < categoryResult.length-1; i++) {
        const categoryResultJSON = JSON.stringify( categoryResult[i]);
        const categoryResultJSONparsed = JSON.parse(categoryResultJSON);
        categoryResultArray.push(categoryResultJSONparsed);
      }
      console.log("categoryResultJSON: ", categoryResultArray[0][0]);
      res.status(200).json(categoryResultArray[0]);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },

  getTopSelling: async (req, res) => {
    try {
      const TopSellingArray = [];
      const TopSelling = await reportObj.getTopSelling();
      console.log("userResult: ", TopSelling);
      for (let i = 0; i < TopSelling.length-1; i++) {
        const TopSellingJSON = JSON.stringify(TopSelling[i]);
        const TopSellingJSONparsed = JSON.parse(TopSellingJSON);
        TopSellingArray.push(TopSellingJSONparsed);
      }
      console.log("TopSellingJSON: ", TopSellingArray[0][0]);
      res.status(200).json(TopSellingArray[0]);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  getQuarterlyReports: async (req, res) => {
    try {
      const QuarterlyReportsArray = [];
      console.log("req.body.year:", req.body.year);
      let selectedYear = req.body.year !== "all" ? req.body.year : null;
      console.log("selectedYear: ", selectedYear);
      const QuarterlyReports = await reportObj.getQuarterlyReports(selectedYear);
      console.log("userResult: ", QuarterlyReports);

      console.log(QuarterlyReports);
      for (let i = 0; i < QuarterlyReports.length-1; i++) {
        const QuarterlyReportsJSON = JSON.stringify( QuarterlyReports[i]);
        const QuarterlyReportsJSONparsed = JSON.parse(QuarterlyReportsJSON);
        QuarterlyReportsArray.push(QuarterlyReportsJSONparsed);
      }
      console.log("QuarterlyReportsJSON: ", QuarterlyReportsArray[0]);
      res.status(200).json(QuarterlyReportsArray[0]);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  getOrders: async (req, res) => {
    try {
      const OrderArray = [];
      const Order = await reportObj.getOrders();
      console.log("userResult: ", Order);
  
      for (let i = 0; i < Order.length; i++) {
        const OrderItemArray = [];
        const OrderJSON = JSON.stringify(Order[i]);
        const OrderJSONparsed = JSON.parse(OrderJSON);
        console.log(OrderJSONparsed.Order_Id);
        const OrderItems = await reportObj.getOrderItems(OrderJSONparsed.Order_Id);
        
        for (let j = 0; j < OrderItems.length; j++) {
          const OrderItemJSON = JSON.stringify(OrderItems[j]);
          const OrderItemJSONparsed = JSON.parse(OrderItemJSON);
          OrderItemArray.push(OrderItemJSONparsed);
        }
        
        OrderJSONparsed.OrderItems = OrderItemArray; // Assuming you want to add OrderItems to the OrderJSONparsed object
        OrderArray.push(OrderJSONparsed);
      }
      
      console.log("OrderJSON: ", OrderArray);
      res.status(200).json(OrderArray);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  
  getOrderCount: async (req, res) => {
    try {
      // const OrderArray = [];
      const Order = await reportObj.getOrderCount();
      console.log("userResult: ", Order);
  
      // for (let i = 0; i < Order.length; i++) {
      //   const OrderItemArray = [];
      //   const OrderJSON = JSON.stringify(Order[i]);
      //   const OrderJSONparsed = JSON.parse(OrderJSON);
      //   console.log(OrderJSONparsed.Order_Id);
      //   const OrderItems = await reportObj.getOrderItems(OrderJSONparsed.Order_Id);
        
      //   for (let j = 0; j < OrderItems.length; j++) {
      //     const OrderItemJSON = JSON.stringify(OrderItems[j]);
      //     const OrderItemJSONparsed = JSON.parse(OrderItemJSON);
      //     OrderItemArray.push(OrderItemJSONparsed);
      //   }
        
      //   OrderJSONparsed.OrderItems = OrderItemArray; // Assuming you want to add OrderItems to the OrderJSONparsed object
      //   OrderArray.push(OrderJSONparsed);
      // }
      
      console.log("OrderJSON: ", Order);
      res.status(200).json(Order);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  
  getProducts: async (req, res) => {
    try {
      // const OrderArray = [];
      const Order = await reportObj.getProducts();
      console.log("userResult: ", Order);
  
      // for (let i = 0; i < Order.length; i++) {
      //   const OrderItemArray = [];
      //   const OrderJSON = JSON.stringify(Order[i]);
      //   const OrderJSONparsed = JSON.parse(OrderJSON);
      //   console.log(OrderJSONparsed.Order_Id);
      //   const OrderItems = await reportObj.getOrderItems(OrderJSONparsed.Order_Id);
        
      //   for (let j = 0; j < OrderItems.length; j++) {
      //     const OrderItemJSON = JSON.stringify(OrderItems[j]);
      //     const OrderItemJSONparsed = JSON.parse(OrderItemJSON);
      //     OrderItemArray.push(OrderItemJSONparsed);
      //   }
        
      //   OrderJSONparsed.OrderItems = OrderItemArray; // Assuming you want to add OrderItems to the OrderJSONparsed object
      //   OrderArray.push(OrderJSONparsed);
      // }
      
      // console.log("OrderJSON: ", OrderArray);
      res.status(200).json(Order);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  
  getUsers: async (req, res) => {
    try {
      // const OrderArray = [];
      const Order = await reportObj.getUsers();
      console.log("userResult: ", Order);
  
      // for (let i = 0; i < Order.length; i++) {
      //   const OrderItemArray = [];
      //   const OrderJSON = JSON.stringify(Order[i]);
      //   const OrderJSONparsed = JSON.parse(OrderJSON);
      //   console.log(OrderJSONparsed.Order_Id);
      //   const OrderItems = await reportObj.getOrderItems(OrderJSONparsed.Order_Id);
        
      //   for (let j = 0; j < OrderItems.length; j++) {
      //     const OrderItemJSON = JSON.stringify(OrderItems[j]);
      //     const OrderItemJSONparsed = JSON.parse(OrderItemJSON);
      //     OrderItemArray.push(OrderItemJSONparsed);
      //   }
        
      //   OrderJSONparsed.OrderItems = OrderItemArray; // Assuming you want to add OrderItems to the OrderJSONparsed object
      //   OrderArray.push(OrderJSONparsed);
      // }
      
      // console.log("OrderJSON: ", OrderArray);
      res.status(200).json(Order);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  
  getCustomer: async (req, res) => {
    try {
      // const OrderArray = [];
      const Order = await reportObj.getCustomer();
      console.log("userResult: ", Order);
  
      // for (let i = 0; i < Order.length; i++) {
      //   const OrderItemArray = [];
      //   const OrderJSON = JSON.stringify(Order[i]);
      //   const OrderJSONparsed = JSON.parse(OrderJSON);
      //   console.log(OrderJSONparsed.Order_Id);
      //   const OrderItems = await reportObj.getOrderItems(OrderJSONparsed.Order_Id);
        
      //   for (let j = 0; j < OrderItems.length; j++) {
      //     const OrderItemJSON = JSON.stringify(OrderItems[j]);
      //     const OrderItemJSONparsed = JSON.parse(OrderItemJSON);
      //     OrderItemArray.push(OrderItemJSONparsed);
      //   }
        
      //   OrderJSONparsed.OrderItems = OrderItemArray; // Assuming you want to add OrderItems to the OrderJSONparsed object
      //   OrderArray.push(OrderJSONparsed);
      // }
      
      // console.log("OrderJSON: ", OrderArray);
      res.status(200).json(Order);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
  
};
