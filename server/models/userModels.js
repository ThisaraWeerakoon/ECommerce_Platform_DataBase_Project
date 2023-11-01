const db = require("../util/database");

module.exports = class User {
  async getLoginDetails(email, password) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT User_Id, First_Name, Last_Name, User_Type FROM User WHERE Email = ? AND Password = ? ",
        [email, password],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("Value found");
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
  async fetchUsers(role) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT First_Name, Last_Name, Email, Is_Logged_In FROM User WHERE User_Type = ? ",
        [role],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log("Result: ", result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
  async insertUser(firstName, lastName, email, phoneNumber, password) {
    db.query(
      "INSERT INTO User(Email, Phone_Number, First_Name, Last_Name, Password) VALUES (?,?,?,?,?) ",
      [email, phoneNumber, firstName, lastName, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Value Insterted");
        }
      }
    );
  }
  async insertAdmin(firstName, lastName, email, phoneNumber, password, role) {
    db.query(
      "INSERT INTO User(Email, Phone_Number, First_Name, Last_Name, Password, User_Type) VALUES (?,?,?,?,?,?) ",
      [email, phoneNumber, firstName, lastName, password, role],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Value Insterted");
        }
      }
    );
  }
  async updateLoginStatus(user_id) {
    db.query(
      "UPDATE User SET Is_Logged_In = 1 where User_Id = ?",
      [user_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Login status changed");
        }
      }
    );
  }
  async updateLogoutStatus(user_id) {
    db.query(
      "UPDATE User SET Is_Logged_In = 0 where User_Id = ?",
      [user_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Logout status changed");
        }
      }
    );
  }

  async fetchUserDetails(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT First_Name, Last_Name, Email, Phone_Number FROM user WHERE User_Id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
  async insertAddress(
    user_Id,
    House_Number,
    Street_Number,
    Address_Line_1,
    Address_Line_2,
    City,
    Region,
    Postal_Code
  ) {
    try {
      // First, insert the address data into the 'address' table
      const insertAddressQuery = `
            INSERT INTO address (House_Number, Street_Number, Address_Line_1, Address_Line_2, City, Region, Postal_Code)
            VALUES (?, ?, ?, ?, ?, ?, ?)`;

      const addressInsertResult = await new Promise((resolve, reject) => {
        db.query(
          insertAddressQuery,
          [
            House_Number,
            Street_Number,
            Address_Line_1,
            Address_Line_2,
            City,
            Region,
            Postal_Code,
          ],
          (err, result) => {
            if (err) {
              console.error("Error inserting address:", err);
              reject(err);
            } else {
              console.log("Address Inserted");
              resolve(result.insertId); // Resolve with the inserted 'Address_Id'
              console.log(result.insertId);
            }
          }
        );
      });
      // Second, insert the 'user_address' record linking the user and the address
      const insertUserAddressQuery = `
    INSERT INTO user_address (User_Id, Address_Id, Is_Default)
    VALUES (?, ?, ?)`;

      // You can set Is_Default to 1 or 0 based on your requirements
      const isDefault = 1;

      const userAddressInsertResult = await new Promise((resolve, reject) => {
        db.query(
          insertUserAddressQuery,
          [user_Id, addressInsertResult, isDefault],
          (err, result) => {
            if (err) {
              console.error("Error inserting user_address:", err);
              reject(err);
            } else {
              console.log("User Address Inserted");
              resolve(result.insertId);
              console.log(result.insertId);
            }
          }
        );
      });
    } catch (error) {
      throw error; // Handle or log the error at an upper level if necessary
    }
  }

  async insertPaymentDetails(
    userID,
    paymentType,
    provider,
    accountNumber,
    expiryDate
  ) {
    const isDefault = 1;

    // Check if the user already has a default payment method
    db.query(
      "SELECT User_Id FROM user_payment_method WHERE User_Id = ? AND is_Default = ?",
      [userID, isDefault],
      (err, rows) => {
        if (err) {
          console.log(err);
        } else {
          if (rows.length > 0) {
            // User already has a default payment method, update it
            db.query(
              "UPDATE user_payment_method SET Payment_Type = ?, Provider = ?, Account_Number = ?, Expiry_Date = ? WHERE User_Id = ? AND is_Default = ?",
              [
                paymentType,
                provider,
                accountNumber,
                expiryDate,
                userID,
                isDefault,
              ],
              (updateErr, updateResult) => {
                if (updateErr) {
                  console.log(updateErr);
                } else {
                  console.log("Default payment method updated");
                }
              }
            );
          } else {
            // User doesn't have a default payment method, insert a new one
            db.query(
              "INSERT INTO user_payment_method(User_Id, Payment_Type, Provider, Account_Number, Expiry_Date, is_Default) VALUES (?,?,?,?,?,?)",
              [
                userID,
                paymentType,
                provider,
                accountNumber,
                expiryDate,
                isDefault,
              ],
              (insertErr, insertResult) => {
                if (insertErr) {
                  console.log(insertErr);
                } else {
                  console.log("New default payment method inserted");
                }
              }
            );
          }
        }
      }
    );
  }

  async fetchOrderHistory(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT Product_Name,Order_Date , Quantity,Price  FROM orderhistory WHERE User_Id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async fetchOrderHistory(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT Product_Name,Order_Date , Quantity, Price  FROM orderhistory WHERE User_Id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async fetchtotalprice(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT SUM(Price) AS TotalPrice FROM cartview WHERE User_Id = ? GROUP BY User_Id",
        [user_id],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async fetchpaymentDetails(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT Payment_Type, Provider, Account_Number, Expiry_Date FROM user_payment_method  WHERE User_Id = ?",
        [user_id],
        (err, result) => {
          console.log(result);
          if (err) {
            console.log(issue);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }
  async fetchaddressDetails(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT a.Address_Id, a.House_Number, a.Street_Number, a.Address_Line_1, a.Address_Line_2, a.City, a.Region, a.Postal_Code FROM user_address ua JOIN address a ON ua.Address_Id = a.Address_Id WHERE ua.User_Id = ?",
        [user_id],
        (err, result) => {
          console.log(result);
          if (err) {
            console.log(issue);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async fetchCartItems(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT Product_Name, Quantity, Price  FROM cartview WHERE User_Id = ?",
        [user_id],
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the Promise if there's an error
          } else {
            console.log(result);
            resolve(result); // Resolve the Promise with the result
          }
        }
      );
    });
  }

  async insertOrder(userID, tPrice) {
    // Find the cart ID associated with the user
    db.query(
      "SELECT Cart_Id FROM cart WHERE User_Id = ? ",
      [userID], // Assuming Is_Checkout is a flag indicating an active cart
      (cartErr, cartResult) => {
        if (cartErr) {
          console.log(cartErr);
        } else {
          if (cartResult.length === 0) {
            // Handle the case where there is no active cart for the user
            console.log("No active cart found for the user");
          } else {
            const cartId = cartResult[0].Cart_Id;

            // Insert a new order record associated with the found cart
            db.query(
              "INSERT INTO orders (Cart_Id, Order_Date, Payment_Method, Delivery_Method_Name, Order_Total) VALUES (?,?,?,?,?)",
              [cartId, new Date(), "Cash", "Pick up", tPrice], // You can set Order_Total to 0 for now
              (orderErr, orderResult) => {
                if (orderErr) {
                  console.log(orderErr);
                } else {
                  const orderId = orderResult.insertId;

                  // Insert order items from cart items
                  db.query(
                    "INSERT INTO order_item (Variant_Id, Order_Id, Quantity) " +
                      "SELECT Variant_Id, ?, Cart_Item_Quantity FROM cart_item ",
                    [orderId],
                    (itemErr, itemResult) => {
                      if (itemErr) {
                        console.log(itemErr);
                      } else {
                        // Clear the cart items for the user
                        db.query(
                          "DELETE FROM cart_item",
                          (deleteErr, deleteResult) => {
                            if (deleteErr) {
                              console.log(deleteErr);
                            } else {
                              console.log("Cart items cleared");
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      }
    );
  }

  // async insertOrder2(userID, tPrice) {
  //   // Find the cart ID associated with the user
  //   db.query(
  //     "SELECT Cart_Id FROM cart WHERE User_Id = ?",
  //     [userID], // Assuming Is_Checkout is a flag indicating an active cart
  //     (cartErr, cartResult) => {
  //       if (cartErr) {
  //         console.log(cartErr);
  //       } else {
  //         if (cartResult.length === 0) {
  //           // Handle the case where there is no active cart for the user
  //           console.log("No active cart found for the user");
  //         } else {
  //           const cartId = cartResult[0].Cart_Id;

  //           // Insert a new order record associated with the found cart
  //           db.query(
  //             "INSERT INTO orders (Cart_Id, Order_Date, Payment_Method, Delivery_Method_Name, Order_Total) VALUES (?,?,?,?,?)",
  //             [cartId, new Date(), "Cash on Delivery", "Delivery", tPrice], // You can set Order_Total to 0 for now
  //             (orderErr, orderResult) => {
  //               if (orderErr) {
  //                 console.log(orderErr);
  //               } else {
  //                 const orderId = orderResult.insertId;
                  

  //                 // Insert order items from cart items
  //                 db.query(
  //                   "INSERT INTO order_item (Variant_Id, Order_Id, Quantity) " +
  //                     "SELECT Variant_Id, ?, Cart_Item_Quantity FROM cart_item ",
  //                   [orderId],
  //                   (itemErr, itemResult) => {
  //                     if (itemErr) {
  //                       console.log(itemErr);
  //                     } else {
  //                       // Clear the cart items for the user
  //                       db.query(
  //                         "DELETE FROM cart_item where Cart_Id = ?",
  //                         [cartId],
  //                         (deleteErr, deleteResult) => {
  //                           if (deleteErr) {
  //                             console.log(deleteErr);
  //                           } else {
  //                             console.log("Cart items cleared");
                            
  //                             db.query(
  //                               "SELECT MAX(getDeliveryEstimate(Variant_Id)) FROM order_item WHERE Order_Id = ? ",
  //                               [orderId],
  //                               (itemErr, itemResult) => {
  //                                 if (itemErr) {
  //                                   console.log(itemErr);
  //                                 } else {
  //                                   console.log("Delivery : ", orderId);
  //                                   return(orderId);
  //                                 }
  //                               }
  //                             );
                            
  //                           }
  //                         }
  //                       );
  //                     }
  //                   }
  //                 );

  //               }
  //             }
  //           );
  //         }
  //       }
  //     }
  //   );
  // }

  async insertOrder2(userID, tPrice) {
    return new Promise((resolve, reject) => {
      // Find the cart ID associated with the user
      db.query(
        "SELECT Cart_Id FROM cart WHERE User_Id = ?",
        [userID],
        (cartErr, cartResult) => {
          if (cartErr) {
            reject(cartErr);
          } else {
            if (cartResult.length === 0) {
              // Handle the case where there is no active cart for the user
              reject("No active cart found for the user");
            } else {
              const cartId = cartResult[0].Cart_Id;
  
              // Insert a new order record associated with the found cart
              db.query(
                "INSERT INTO orders (Cart_Id, Order_Date, Payment_Method, Delivery_Method_Name, Order_Total) VALUES (?,?,?,?,?)",
                [cartId, new Date(), "Cash on Delivery", "Delivery", tPrice],
                (orderErr, orderResult) => {
                  if (orderErr) {
                    reject(orderErr);
                  } else {
                    const orderId = orderResult.insertId;
  
                    // Insert order items from cart items
                    db.query(
                      "INSERT INTO order_item (Variant_Id, Order_Id, Quantity) " +
                        "SELECT Variant_Id, ?, Cart_Item_Quantity FROM cart_item ",
                      [orderId],
                      (itemErr, itemResult) => {
                        if (itemErr) {
                          reject(itemErr);
                        } else {
                          // Clear the cart items for the user
                          db.query(
                            "DELETE FROM cart_item where Cart_Id = ?",
                            [cartId],
                            (deleteErr, deleteResult) => {
                              if (deleteErr) {
                                reject(deleteErr);
                              } else {
                                // Calculate delivery estimate and resolve it
                                db.query(
                                  "SELECT MAX(getDeliveryEstimate(Variant_Id)) FROM order_item WHERE Order_Id = ? ",
                                  [orderId],
                                  (itemErr, itemResult) => {
                                    if (itemErr) {
                                      reject(itemErr);
                                    } else {
                                      const deliveryEstimate = itemResult[0]['MAX(getDeliveryEstimate(Variant_Id))'];
                                      resolve(deliveryEstimate);
                                    }
                                  }
                                );
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        }
      );
    });
  }
  

  async insertOrder3(userID, tPrice) {
    return new Promise((resolve, reject) => {
      // Find the cart ID associated with the user
      db.query(
        "SELECT Cart_Id FROM cart WHERE User_Id = ?",
        [userID],
        (cartErr, cartResult) => {
          if (cartErr) {
            reject(cartErr);
          } else {
            if (cartResult.length === 0) {
              // Handle the case where there is no active cart for the user
              reject("No active cart found for the user");
            } else {
              const cartId = cartResult[0].Cart_Id;
  
              // Insert a new order record associated with the found cart
              db.query(
                "INSERT INTO orders (Cart_Id, Order_Date, Payment_Method, Delivery_Method_Name, Order_Total) VALUES (?,?,?,?,?)",
                [cartId, new Date(), "Card Payment", "Delivery", tPrice],
                (orderErr, orderResult) => {
                  if (orderErr) {
                    reject(orderErr);
                  } else {
                    const orderId = orderResult.insertId;
  
                    // Insert order items from cart items
                    db.query(
                      "INSERT INTO order_item (Variant_Id, Order_Id, Quantity) " +
                        "SELECT Variant_Id, ?, Cart_Item_Quantity FROM cart_item ",
                      [orderId],
                      (itemErr, itemResult) => {
                        if (itemErr) {
                          reject(itemErr);
                        } else {
                          // Clear the cart items for the user
                          db.query(
                            "DELETE FROM cart_item where Cart_Id = ?",
                            [cartId],
                            (deleteErr, deleteResult) => {
                              if (deleteErr) {
                                reject(deleteErr);
                              } else {
                                // Calculate delivery estimate and resolve it
                                db.query(
                                  "SELECT MAX(getDeliveryEstimate(Variant_Id)) FROM order_item WHERE Order_Id = ? ",
                                  [orderId],
                                  (itemErr, itemResult) => {
                                    if (itemErr) {
                                      reject(itemErr);
                                    } else {
                                      const deliveryEstimate = itemResult[0]['MAX(getDeliveryEstimate(Variant_Id))'];
                                      resolve(deliveryEstimate);
                                    }
                                  }
                                );
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        }
      );
    });
  }
};