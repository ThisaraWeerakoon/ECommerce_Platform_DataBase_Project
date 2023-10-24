const db = require("../util/database");

module.exports = class Product{
    async getCarouselImages() {
        return new Promise((resolve, reject) => {
          db.query(
            "SELECT `Product_Image` FROM product LIMIT 5",
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
}