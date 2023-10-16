const express = require('express');

const app = express();

const cors = require('cors');
app.use(express.json());

app.use(cors());

const userRouter = require("./routes/userRoutes");
const errorController = require("./controllers/errorController");

app.use("/user", userRouter);

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