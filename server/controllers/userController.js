const User = require("../models/userModels");
const userObj = new User();

module.exports = {
  validateLogin: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email, password);
      const loginResult = await userObj.getLoginDetails(email, password);
      if (loginResult.length > 0) {
        console.log("User there");
        res.status(200).json(loginResult);
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

    try {
      const user = await userObj.insertUser(
        firstName,
        lastName,
        email,
        phoneNumber,
        password
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
};
