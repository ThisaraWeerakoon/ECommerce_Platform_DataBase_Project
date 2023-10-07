const db = require("../util/database")

module.exports = class User{
    async getLoginDetails(email,password) {
        db.query(
            "SELECT * FROM Site_User WHERE Email_Address = ? AND password = ? ",
            [email,password],
            (err,result)=>{
                if(err){
                    console.log(err);
                }    
                else{
                    console.log("Value found");
                }
            }
        )
    }
    async insertUser(firstName, lastName, email, phoneNumber, password) {
        db.query(
            "INSERT INTO Site_User(Email_Address, Phone_Number, First_Name, Last_Name, Password) VALUES (?,?,?,?,?) ",
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
}