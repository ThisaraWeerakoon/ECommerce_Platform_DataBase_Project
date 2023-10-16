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

    db.query(
        "INSERT INTO TestingUser (Email_Address,Password) VALUES (?,?) ",
        [email,password],
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