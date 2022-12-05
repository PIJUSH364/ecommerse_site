const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes=require("./routes/userRoutes");

const app=express();
dotenv.config();

// ? mongoDb connection 
connectDB();


// jason data
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("api is redy to  running...")

})

// routes setup
app.use("/api/users",userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`app listen port ${PORT}`));