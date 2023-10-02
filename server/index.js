const express = require('express');

const app = express();

const mysql = require('mysql')

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"ecommerce_platform"
})

app.post("/create",(req,res)=>{
    
})

app.

app.listen(3001,()=>{
    console.log("Server is running");
});