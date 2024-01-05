// const Product = require("../models/productModels");
// const productObj = new Product();

// module.exports = {
//     getCarouselImages: async (req, res) => {
//         try {
//             const ImageResult = await productObj.getCarouselImages();
//             console.log(ImageResult);
//             if (ImageResult.length > 0) {
//                 const ImageResultJSON = JSON.stringify(ImageResult);
//                 console.log(ImageResultJSON);
//                 res.status(200).json(ImageResultJSON);
//             } else {
//                 res.status(404).json({
//                     message: "No images found",
//                 });
//             }
//         } catch (err) {
//             console.error(err); // Log the specific error for debugging
//             res.status(500).json({
//                 message: "An error occurred",
//                 error: err.message,
//             });
//         }
//     },

//     getCategories: async (req, res) => {
//         try {
//             const categoryResult = await productObj.getCategories();
//             console.log(categoryResult);
//             if (categoryResult.length > 0) {
//                 const categoryResultJSON = JSON.stringify(categoryResult);
//                 console.log(categoryResultJSON);
//                 res.status(200).json(categoryResultJSON);
//             } else {
//                 res.status(404).json({
//                     message: "No categories found",
//                 });
//             }
//         } catch (err) {
//             console.error(err); // Log the specific error for debugging
//             res.status(500).json({
//                 message: "An error occurred",
//                 error: err.message,
//             });
//         }
//     },

//     postCategoryID : async (req, res) => {
//         try {
//             const categoryID = req.body.selectedCategoryID;
//             console.log("categoryID",categoryID);
//             // const subCategory = await productObj.getSubCategories(categoryID);
            
//             // if (subCategory.length > 0) {
//             //     const subCategoryJSON = JSON.stringify(subCategory);
//             //     console.log(subCategoryJSON);
//             //     res.status(200).json(categoryNameJSON);
//             // } else {
//             //     res.status(404).json({
//             //         message: "No categories found",
//             //     });
//             // }
//         } catch (err) {
//             console.error(err); // Log the specific error for debugging
//             res.status(500).json({
//                 message: "An error occurred",
//                 error: err.message,
//             });
//         }
//     },

//     getSubCategories: async (req, res) => {
//         try {
//             const categoryID = req.body.selectedCategoryID;
//             console.log("parent categoryID that want to get sub categories",categoryID);
//             const subCategory = await productObj.getSubCategories(categoryID);
//             console.log("sub category",subCategory);
//             if (subCategory.length > 0) {
//                 const subCategoryJSON = JSON.stringify(subCategory);
//                 console.log(subCategoryJSON);
//                 res.status(200).json(subCategoryJSON);
//             } else {
//                 res.status(404).json({
//                     message: "No categories found",
//                 });
//             }
//         } catch (err) {
//             console.error(err); // Log the specific error for debugging
//             res.status(500).json({
//                 message: "An error occurred",
//                 error: err.message,
//             });
//         }
//     },
// }   

const Product = require("../models/productModels");
const productObj = new Product();

module.exports = {
    getCarouselImages: async (req, res) => {
        try {
            const ImageResult = await productObj.getCarouselImages();
            // console.log(ImageResult);
            if (ImageResult.length > 0) {
                const ImageResultJSON = JSON.stringify(ImageResult);
                // console.log(ImageResultJSON);
                res.status(200).json(ImageResultJSON);
            } else {
                res.status(404).json({
                    message: "No images found",
                });
            }
        } catch (err) {
            console.error(err); // Log the specific error for debugging
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getCategories: async (req, res) => {
        try {
            const categoryResult = await productObj.getCategories();
            // console.log(categoryResult);
            if (categoryResult.length > 0) {
                const categoryResultJSON = JSON.stringify(categoryResult);
                // console.log(categoryResultJSON);
                res.status(200).json(categoryResultJSON);
            } else {
                res.status(404).json({
                    message: "No categories found",
                });
            }
        } catch (err) {
            console.error(err); // Log the specific error for debugging
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    postCategoryID: async (req, res) => {
        try {
            const categoryID = req.body.selectedCategoryID;
            // console.log("hello categoryID", categoryID);

            // Now, you can call the getSubCategories function and pass the categoryID
            const subCategories = await productObj.getSubCategories(categoryID);
            
            if (subCategories.length > 0) {
                const subCategoryJSON = JSON.stringify(subCategories);
                // console.log(subCategoryJSON);
                res.status(200).json(subCategoryJSON);
            } else {
                res.status(404).json({
                    message: "No subcategories found for the specified category",
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getSubCategories: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            // This function now receives categoryID as a parameter.
            // const categoryID = req.params.categoryID; // You can get it from the request parameters
            const selectedCategoryID = req.query.selectedCategoryID;
            // console.log("req params selectedCategoryID",selectedCategoryID);
            // console.log("parent categoryID that want to get sub categories", categoryID);
            
            const subCategory = await productObj.getSubCategories(selectedCategoryID);
            // console.log("sub category", subCategory);

            // if (subCategory.length > 0) {
                const subCategoryJSON = JSON.stringify(subCategory);
                // console.log(subCategoryJSON);
                res.status(200).json(subCategoryJSON);
            // } else {
                // res.status(404).json({
                //     message: "No subcategories found for the specified category",
                // });
 
            // }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getProducts: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            // This function now receives categoryID as a parameter.
            // const categoryID = req.params.categoryID; // You can get it from the request parameters
            const selectedCategoryID = req.query.selectedCategoryID;
            // console.log("req params selectedCategoryID",selectedCategoryID);
            // console.log("parent categoryID that want to get sub categories", categoryID);
            
            const products = await productObj.getProducts(selectedCategoryID);
            // console.log("products", products);

            // if (subCategory.length > 0) {
                const productsJSON = JSON.stringify(products);
                // console.log(productsJSON);
                res.status(200).json(productsJSON);
            // } else {
                // res.status(404).json({
                //     message: "No subcategories found for the specified category",
                // });
 
            // }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },
    
    //Name,description and image of product
    getProductItemDetails: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            // This function now receives categoryID as a parameter.
            // const categoryID = req.params.categoryID; // You can get it from the request parameters
            const selectedProductID = req.query.selectedProductID;
            // console.log("req params selectedProductID",selectedProductID);
            // console.log("parent categoryID that want to get sub categories", categoryID);
            
            const detailsOfProduct = await productObj.getProductItemDetails(selectedProductID);
            // console.log("detailsOfProduct", detailsOfProduct);

            // if (subCategory.length > 0) {
                const productDetailJSON = JSON.stringify(detailsOfProduct);
                // console.log(productDetailJSON);
                res.status(200).json(productDetailJSON);
            // } else {
                // res.status(404).json({
                //     message: "No subcategories found for the specified category",
                // });
 
            // }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getVariantTypes: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            const selectedCategoryID = req.query.selectedCategoryID;
            const variantTypes = await productObj.getVariantTypes(selectedCategoryID);
            const variantTypesJSON = JSON.stringify(variantTypes);
            res.status(200).json(variantTypesJSON);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getVariantOptions: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            const selectedVariantTypeID = req.query.selectedVariantTypeID;
            const variantOptions = await productObj.getVariantOptions(selectedVariantTypeID);
            const variantOptionsJSON = JSON.stringify(variantOptions);
            res.status(200).json(variantOptionsJSON);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getVariantTypesAndOptions: async (req, res) => {
        try{
            const selectedCategoryID = req.query.selectedCategoryID;
            const variantTypesAndOptions = await productObj.getVariantTypesAndOptions(selectedCategoryID);
            // const variantTypesAndOptionsJSON = JSON.parse(variantTypesAndOptions);
            
            //Function for converting JSON to map object

            const transformedData = {};

            // Loop through the JSON data and transform it into the desired format
            variantTypesAndOptions.forEach(item => {  
            const { Variant_Type_Id, Variation_Name, Variation_Option_Id, Variation_Option_Name } = item;
    
            if (!transformedData[Variant_Type_Id]) {
                transformedData[Variant_Type_Id] = {
                    Variant_Type_Id,
                    Variation_Name,
                    Variation_Options: [],
                };
            }
    
            transformedData[Variant_Type_Id].Variation_Options.push({
                Variation_Option_Id,
                Variation_Option_Name,
            });
        });

            const result = Object.values(transformedData);


            res.status(200).json(result);

        }
        catch(err){
            console.error(err);
            res.status(500).json({
                messqge: "An error occurred",
                error:err.message,
            });
        }
    },

    getVariantsByOptions: async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            const selectedVariantOptionIDs = req.query.selectedVariantOptionIDs;
            // console.log( selectedVariantOptionIDs);
            const variantID = await productObj.getVariantsByOptions(selectedVariantOptionIDs);
            // console.log("variantID in getVariantByOptions",variantID);
            const variantIDJSON = JSON.stringify(variantID);
            console.log("Variant ID in getVariantByOptions",variantIDJSON);
            res.status(200).json(variantIDJSON);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    getVariantItemDetails : async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            const selectedVariantID = req.query.selectedVariantID;
            // console.log( "selectedVariantID in backend",selectedVariantID);
            const variantItemDetails = await productObj.getVariantItemDetails(selectedVariantID);
            const variantItemDetailsJSON = JSON.stringify(variantItemDetails);
            // console.log("Variant Item Details backend",variantItemDetailsJSON);
            res.status(200).json(variantItemDetailsJSON);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },

    insertCartItem : async (req, res) => {
        // You can remove the code that extracts categoryID from req.body here,
        // since you're passing it as a parameter from the postCategoryID function.

        try {
            const userId = req.query.userId;
            // console.log("userId from insertCartItem ",userId);
            const variantId = req.query.variantId;
            // console.log("variantId from insertCartItem ",variantId);
            const cartItemQuantity = req.query.cartItemQuantity;
            // console.log("cartItemQuantity from insertCartItem ",cartItemQuantity);

            await productObj.insertCartItem(userId,variantId,cartItemQuantity);
             


         
            // const variantItemDetails = await productObj.getVariantItemDetails(selectedVariantID);
            // const variantItemDetailsJSON = JSON.stringify(variantItemDetails);
            // console.log("Variant Item Details backend",variantItemDetailsJSON);
            // res.status(200).json(variantItemDetailsJSON);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    }, 


// }
//   getCarouselImages: async (req, res) => {
//     try {
//       const ImageResult = await productObj.getCarouselImages();
//       console.log(ImageResult);
//       if (ImageResult.length > 0) {
//         const ImageResultJSON = JSON.stringify(ImageResult);
//         console.log(ImageResultJSON);
//         res.status(200).json(ImageResultJSON);
//       } else {
//         res.status(404).json({
//           message: "No images found",
//         });
//       }
//     } catch (err) {
//       console.error(err); // Log the specific error for debugging
//       res.status(500).json({
//         message: "An error occurred",
//         error: err.message,
//       });
//     }
//   },
  getInventory: async (req, res) => {
    try {
      const InventoryArray = [];
      const Inventory = await productObj.getProductInventory();
    //   console.log("InventoryStat: ", Inventory);
      for (let i = 0; i < Inventory.length; i++) {
        const InventoryJSON = JSON.stringify(Inventory[i]);
        const InventoryJSONparsed = JSON.parse(InventoryJSON);
        InventoryArray.push(InventoryJSONparsed);
      }
    //   console.log("InventoryArray: ", InventoryArray);
      res.status(200).json(InventoryArray);
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },
}
