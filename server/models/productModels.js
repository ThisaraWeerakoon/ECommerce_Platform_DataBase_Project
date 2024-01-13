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
                // console.log("In the productModel");
                resolve(result); // Resolve the Promise with the result
              }
            }
          );
        });
    }
    

    //To complete
    async getProductImages() {
      return new Promise((resolve, reject) => {
        db.query(
          "SELECT `Product_Image`, FROM product LIMIT 5",
          [],
          (err, result) => {
            if (err) {
              console.log(err);
              reject(err); // Reject the Promise if there's an error
            } else {
              // console.log("In the productModel");
              resolve(result); // Resolve the Promise with the result
            }
          }
        );
      });
  }

  async getCategories() {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT Product_Category_Id,Category_Name,Category_Image FROM product_category WHERE Parent_Product_Category_Id IS NULL",
        [],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            // console.log("In the productModel");
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async getSubCategories(categoryID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select Product_Category_Id,Category_Name,Category_Image from product_category where Parent_Product_Category_Id = ?",
        [categoryID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("In the productModel");
            resolve(result);
          }
        }
      )
    }
    )
  }

  async getProducts(selectedCategoryID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select product.Product_Id,product.Name,product.Description,product.Product_Image from product join product_category_configuration on product.Product_Id=product_category_configuration.Product_Id where product_category_configuration.Product_Category_Id=?;",
        [selectedCategoryID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("In the productModel");
            resolve(result);
          }
        }
      )
    }
    )
  
  }

  async getProductItemDetails(selectedProductID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select Product_Id,Name,Description,Product_Image from product where Product_Id=?;",
        [selectedProductID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("In the productModel");
            resolve(result);
          }
        }
      )
    }
    )
  
  }

  async getVariantTypes(selectedCategoryID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select Variant_Type_Id,Variation_Name from variant_type where Product_Category_Id=?;",
        [selectedCategoryID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("getVariantTypes");
            resolve(result);
          }
        }
      )
    }
    )
  
  }

  async getVariantOptions(selectedVariantTypeID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select Variation_Option_Id,Variation_Option_Name from variation_option where Variant_Type_Id=?;",
        [selectedVariantTypeID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("getVarientOptions");
            resolve(result);
          }
        }
      )
    }
    )
  
  }

  async getVariantTypesAndOptions(selectedCategoryID) {
    return new Promise((resolve, reject) => {
      db.query(
        "select * from variation_options_with_types where Product_Category_Id = ?;",
        [selectedCategoryID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("getVariantTypesAndOptions error");
            resolve(result);
          }
        }
      )
    })
  }

  async getVariantItemDetails(selectedVariantID) {
    // console.log("Inside getVariantItemDetails model",selectedVariantID);
    return new Promise((resolve, reject) => {
      db.query(
        "select * from variant where Variant_Id = ?;",
        [selectedVariantID],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("getVariantItemDetails error",err,result);
            resolve(result);
          }
        }
      )
    })
  }

  async getVariantsByOptions(selectedVariantOptionIDs) {
    // console.log("Inside getVariantsByOptions model",selectedVariantOptionIDs);
    return new Promise((resolve, reject) => {
      db.query(
        "CALL GetVariantsByOptions(?);",
        [selectedVariantOptionIDs],
        (err,result) => {
          if(err){
            console.log(err);
            reject(err);
          }else{
            // console.log("getVariantsByOptions error",err,result);
            resolve(result);
          }
        }
      )
    })
  }

  async insertCartItem(User_Id,Variant_Id,Cart_Item_Quantity){
    return new Promise((resolve,reject)=> {
      db.query(
        "SELECT InsertCartItem(?, ?, ?);",
        [User_Id,Variant_Id,Cart_Item_Quantity],
        (err,result)=>{
          if(err){
            console.log(err);
            reject(err);

          }else{
            // console.log("getVariantsByOptions error",err,result);
            resolve(result);
          }
        }
      )
    })

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
            // console.log("In the productModel: ", result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
};
