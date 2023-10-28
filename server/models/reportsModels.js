const db = require("../util/database");

module.exports = class Report{
    async getOrderCategories() {
        return new Promise((resolve, reject) => {
          db.query(
            "EXEC FindCategoryOrders()",
            [],
            (err, result) => {
              if (err) {
                console.log(err);
                reject(err); // Reject the Promise if there's an error
              } else {
                console.log("In the reportModel");
                console.log(result);
                resolve(result); // Resolve the Promise with the result
              }
            }
          );
        });
    }
}