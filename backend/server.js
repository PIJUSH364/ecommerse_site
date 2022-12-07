const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes=require("./routes/userRoutes");
const { notFound, errorHandeler } = require('./middlewares/errorMiddleWare');
const User = require('./models/userModel');
const cors = require('cors');

const app=express();
app.use(cors({
    origin:"http://localhost:3000",
}))
dotenv.config();

// ? mongoDb connection 
connectDB();

// jason data
app.use(express.json());

var  allUser=[];
async function fethuser() {
    allUser =await User.find({});
    console.log("all user",allUser);
};
fethuser();

app.get("/",(req,res)=>{
    res.send("api is redy to  running...");
    
})

app.get("/api/all",(req,res)=>{
    res.status(201).json(allUser);
})



// routes setup
app.use("/api/users",userRoutes);

app.use(notFound);
app.use(errorHandeler);

// const PORT=process.env.PORT || 5000;
const PORT= 5000;
app.listen(PORT,console.log(`app listen port ${PORT}`));