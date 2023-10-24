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
  }
};