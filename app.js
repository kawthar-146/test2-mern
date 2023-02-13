const express = require('express');
const mongoose = require('mongoose')
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", router);
mongoose.connect("mongodb+srv://Kawthar:6wRCoPNNjPduZ47y@cluster0.xz5msxq.mongodb.net/test2?retryWrites=true&w=majority").then(()=>{
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
})
.catch((err) => console.log(err));



