const express = require('express');

const app = express();

const mysql = require('mysql')

const cors = require('cors')
app.use(express.json())

app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"ecommerce_platform"
})

app.post("/create",(req,res)=>{
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;

    db.query(
        "INSERT INTO Site_User (Email_Address,Phone_Number,First_Name,Last_Name,Password) VALUES (?,?,?,?,?) ",
        [,email,phoneNumber,firstName,lastName,password,],
        (err,result)=>{
            if(err){
                console.log(err);
            }    
            else{
                res.send("Value Insterted");
            }
        }
    )
})

app.listen(3002,()=>{
    console.log("Server is running");
});