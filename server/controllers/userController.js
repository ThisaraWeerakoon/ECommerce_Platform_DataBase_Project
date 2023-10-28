const { createHash } = require("crypto");
const User = require("../models/userModels");
const userObj = new User();

module.exports = {
  validateLogin: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      // Encrypt the password using crypto
      const hashPassword = createHash("sha256").update(password).digest("hex");
      
      // Call the getLoginDetails method
      const loginResult = await userObj.getLoginDetails(email, hashPassword);
      // If the user exists, convert the returned result to a JSON object and pass the user_id 
      // to the updateLoginStatus method.
      if (loginResult.length > 0) {
        const loginResultJSON = JSON.stringify(loginResult[0]);
        const loginResultObj = JSON.parse(loginResultJSON); // Parse the JSON string
        
        const userId = loginResultObj.User_Id;
        const fName = loginResultObj.First_Name;
        const lName = loginResultObj.Last_Name;
        await userObj.updateLoginStatus(userId);

        // User Object
        const user = {
          name: fName +" " + lName,
          userID : userId
        };
        
        var session = req.session;
        session.user = user;
        session.save();
        console.log("session created")
        console.log(session);
         
        res.status(200).json({Login: true, user: req.session.user });
      } else {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        });
      }
    } catch (err) {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  },

  register: async (req, res) => {
    const email = req.body.email;
    const password = req.body.newPassword;
    const phoneNumber = req.body.phoneNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // Encrypt the password
    const hashPassword = createHash("sha256").update(password).digest("hex");

    try {
      const user = await userObj.insertUser(
        firstName,
        lastName,
        email,
        phoneNumber,
        hashPassword
      );
      res.status(200).json({
        message: "User successfully created",
        user,
      });
    } catch (err) {
      res.status(401).json({
        message: "User not successfully created",
        error: err.message,
      });
    }
  },

  logout: async (req, res) => {
    try {
      const userId = req.body.ID;
      console.log(userId);
      await userObj.updateLogoutStatus(userId);
      req.session.destroy();
      console.log("user logged out");
      res.status(200).json({
        message: "User out",
      });
    } catch (err) {
      res.status(401).json({
        message: "User not successfully out",
        error: err.message,
      });
    }
  },
  
  getSession: async (req, res) => {
    console.log("Getting session");
    if(req.session.user){     
      return res.json({valid: true, user: req.session.user})
    } else {
      return res.json({valid: false})
    }
  },

  userDetails: async (req, res) => {
    try {
      console.log("Trying");
      if (!req.session.user) {
        return res.status(401).json({
          message: "User not authenticated.",
        });
      }
  
      const userId = req.session.user.userID;
      const user = await userObj.fetchUserDetails(userId);
  
      if (user.length > 0) {
        const userDetailsObj = user[0];
  
        const fName = userDetailsObj.First_Name;
        const lName = userDetailsObj.Last_Name;
        const email = userDetailsObj.Email;
        const mobile = userDetailsObj.Phone_Number;

  
        return res.status(200).json({
          message: "User details fetched successfully.",
          user: {
            First_Name: fName,
            Last_Name: lName,
            Email: email,
            Phone_Number: mobile,
          },
        });
      } else {
        return res.status(404).json({
          message: "User not found.",
        });
      }
    } catch (err) {
      console.log("Error found:", err);
      return res.status(500).json({
        message: "An error occurred while fetching user details.",
        error: err.message,
      });
    }
  },
  

  userAddress: async (req, res) => {
    try {
      
      const userId = req.session.user.userID; // Get the user ID from the session
      console.log(req.body)
      const House_Number = req.body.houseNumber;
      const Street_Number = req.body.streetNumber;
      const Address_Line_1 = req.body.addressLine1;
      const Address_Line_2 = req.body.addressLine2;
      const City = req.body.city;
      const Region = req.body.region;
      const Postal_Code = req.body.postalCode;

      console.log(City)
      // Insert the address into the database
      const address = await userObj.insertAddress(userId, House_Number, Street_Number, Address_Line_1, Address_Line_2, City, Region, Postal_Code);
  
      if (address) {
        // Address was successfully inserted
        res.status(200).json({
          message: "Address saved successfully",
          address,
        });
      } else {
        // Failed to save the address
        res.status(401).json({
          message: "Address not saved",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while saving the address",
        error: err.message,
      });
    }
  },

  userPayment: async (req, res) => {
    console.log("Payment details reached the backend")
    try {
      
      const userId = req.session.user.userID; // Get the user ID from the session

      const Payment_Type = req.body.Payment_Type;
      const Provider = req.body.Provider;
      const Account_Number = req.body.Account_Number;
      const Expiry_Date = req.body.Expiry_Date;
  
      // Insert the payment details into the database
      const paymentDetails = await userObj.insertPaymentDetails(userId, Payment_Type, Provider, Account_Number, Expiry_Date);
  
      if (paymentDetails) {
        // Payment details were successfully inserted
        res.status(200).json({
          message: "Payment details saved successfully",
          paymentDetails,
        });
      } else {
        // Failed to save the payment details
        res.status(401).json({
          message: "Payment details not saved",
        });
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({
        message: "An error occurred while saving the payment details",
        error: err.message,
      });
    }
  },
  
  orderHistory: async (req, res) => {
    try{
      const userId = req.session.user.userID;

      const user = await userObj.fetchOrderHistory(userId);
  
      if (user.length > 0) {
        const userDetailsObj = user[0];
  
        const pName = userDetailsObj.Product_Name;
        const Date = userDetailsObj.Order_Date;
        const quantity = userDetailsObj.Quantity;
        const price = userDetailsObj.Price;

        
        return res.status(200).json({
          message: "Order history fetched successfully.",
          user: {
            pName: pName,
            Date: Date,
            quantity: quantity,
            price: price,
          },
        });
      } else {
        return res.status(404).json({
          message: "User not found.",
        });
      }
    } catch (err) {
      console.log("Error found:", err);
      return res.status(500).json({
        message: "An error occurred while fetching order history",
        error: err.message,
      });
    }

  },

  cartItems: async (req, res) => {
    try {
      const userId = req.session.user.userID;
  
      const cartItems = await userObj.fetchCartItems(userId); // Assuming you have an executeQuery method
      console.log(cartItems)
      if (cartItems.length > 0) {
        return res.status(200).json({
          message: 'Cart items fetched successfully.',
          items: cartItems, // Send the array of cart items
        });
      } else {
        return res.status(404).json({
          message: 'No cart items found.',
        });
      }
    } catch (err) {
      console.log('Error found:', err);
      return res.status(500).json({
        message: 'An error occurred while fetching cart items',
        error: err.message,
      });
    }
  }
  
    
};
  



