const Report = require("../models/reportsModels");
const reportObj = new Report();

module.exports = {
  getCategoryBasedOrders: async (req, res) => {
    try {
      // Call the getLoginDetails method
      const categoryResult = await reportObj.getOrderCategories;
      // If the user exists, convert the returned result to a JSON object and pass the user_id
      // to the updateLoginStatus method.
      if (categoryResult.length > 0) {
        const categoryResultJSON = JSON.stringify(categoryResult[0]);
        const categoryResultObj = JSON.parse(categoryResultJSON); // Parse the JSON string

        const userId = categoryResultObj.User_Id;
        const fName = categoryResultObj.First_Name;
        const lName = categoryResultObj.Last_Name;
        
        // User Object
        const user = {
          name: fName + " " + lName,
          userID: userId,
        };

        var session = req.session;
        session.user = user;
        session.save();
        console.log(session);

        res.status(200).json({
          Login: true,
          user: req.session.user,
          type: loginResultObj.User_Type,
        });
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
};
