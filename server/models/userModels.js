const db = require("../util/database");

module.exports = class User{
    async getLoginDetails(email, password) {
        return new Promise((resolve, reject) => {
          db.query(
            "SELECT User_Id, First_Name, Last_Name FROM User WHERE Email = ? AND Password = ? ",
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
    async insertUser(firstName, lastName, email, phoneNumber, password) {
        db.query(
            "INSERT INTO User(Email, Phone_Number, First_Name, Last_Name, Password) VALUES (?,?,?,?,?) ",
            [email,phoneNumber,firstName,lastName,password],
            (err,result)=>{
                if(err){
                    console.log(err);
                }    
                else{
                    console.log("Value Insterted");
                }
            }
        )
    }
    async updateLoginStatus(user_id) {
        db.query(
            "UPDATE User SET Is_Logged_In = 1 where User_Id = ?",
            [user_id],
            (err,result)=>{
                if(err){
                    console.log(err);
                }    
                else{
                    console.log("Login status changed");
                }
            }
        )
    }
    async updateLogoutStatus(user_id) {
      db.query(
          "UPDATE User SET Is_Logged_In = 0 where User_Id = ?",
          [user_id],
          (err,result)=>{
              if(err){
                  console.log(err);
              }    
              else{
                  console.log("Logout status changed");
              }
          }
      )
  }
}