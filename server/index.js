const express = require('express');

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const bodyparser = require('body-parser');

const app = express();

const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// cookie parser middleware
app.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    key: "user",
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767", //a random unique string key used to authenticate a session.
    saveUninitialized:true, //allows any uninitialized session(session is created but not modified) to be sent to the store.
    cookie: { maxAge: oneDay }, //sets the cookie expiry time
    resave: false //enables the session to be stored back to the session store, even if the session was never modified during the request
}));

const userRouter = require("./routes/userRoutes");
const reportsRouter = require("./routes/reportsRoutes");
const productRouter = require("./routes/productRoutes");
const errorController = require("./controllers/errorController");

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/reports", reportsRouter);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(3005,()=>{
    console.log("Server is running");
});

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    process.exit(1)
});