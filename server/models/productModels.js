const db = require("../util/database");

module.exports = class Product {
  async getCarouselImages() {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT `Category_Image` FROM product_category LIMIT 5",
        [],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("In the productModel");
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
  async getProductInventory() {
    return new Promise((resolve, reject) => {
      db.query(
        "select p.Name, SUM(v.Quantity) as Inventory from product p right join variant v on p.Product_Id = v.Product_Id group by p.Product_Id ",
        [],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("In the productModel: ", result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
};
