const db = require("../util/database");

module.exports = class Report {
  async getOrderCategories() {
    return new Promise((resolve, reject) => {
      try {
        console.log("In the reportModel");
        db.query("CALL FindCategoryBasedOrders()", [], (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("Result at the Model: ", result);
            resolve(result); // Resolve the Promise with the result
          }
        });
      } catch (err) {
        console.error("Error in getOrderCategories:", err);
        throw err; // Rethrow the error for the caller to handle
      }
    });
  }

  async getTopSelling() {
    return new Promise((resolve, reject) => {
      try {
        console.log("Inside getTopSelling model");
        db.query(
          "CALL FindTopSellingProducts('2023-10-31 00:00:00',CURRENT_TIMESTAMP)",
          [],
          (err, result) => {
            if (err) {
              console.log(err);
              reject(err); // Reject the Promise if there's an error
            } else {
              console.log("Result at the Model: ", result);
              resolve(result); // Resolve the Promise with the result
            }
          }
        );
      } catch (err) {
        console.error("Error in getTopSelling:", err);
        throw err; // Rethrow the error for the caller to handle
      }
    });
  }
  async getQuarterlyReports() {
    return new Promise((resolve, reject) => {
      try {
        console.log("In the reportModel");
        db.query("CALL QuarterlySales()", [], (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("Result at the Model: ", result);
            resolve(result); // Resolve the Promise with the result
          }
        });
      } catch (err) {
        console.error("Error in getQuarterlyReports:", err);
        throw err; // Rethrow the error for the caller to handle
      }
    });
  }
  async getOrders() {
    return new Promise((resolve, reject) => {
      try {
        console.log("In the reportModel");
        db.query(
          "Select Order_Id, First_Name, Last_Name, Email, Payment_Method, Delivery_Method_Name, City, Region, Order_Total from orderreport",
          [],
          (err, result) => {
            if (err) {
              console.log(err);
              reject(err); // Reject the Promise if there's an error
            } else {
              console.log("Result at the Model: ", result);
              resolve(result); // Resolve the Promise with the result
            }
          }
        );
      } catch (err) {
        console.error("Error in getQuarterlyReports:", err);
        throw err; // Rethrow the error for the caller to handle
      }
    });
  }
  async getOrderItems(Order_Id) {
    return new Promise((resolve, reject) => {
      try {
        console.log("In the reportModel");
        db.query(
          "CALL GenerateOrderItemsReport(?)",
          [Order_Id],
          (err, result) => {
            if (err) {
              console.log(err);
              reject(err); // Reject the Promise if there's an error
            } else {
              console.log("Result at the Model: ", result);
              resolve(result); // Resolve the Promise with the result
            }
          }
        );
      } catch (err) {
        console.error("Error in getQuarterlyReports:", err);
        throw err; // Rethrow the error for the caller to handle
      }
    });
  }
};
