const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// user _schema
const User=require("../models/userModel");
const generateToken = require('../utils/generateToken');

const registerUser=asyncHandler (async (req,res)=>{
    const {name,email,password,pic}=req.body;

// exists email find
    const userExist=await User.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error ("user already exists");
    }

    const user=await User.create({
        name,email,password,pic,
    });

    if (user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error ("error user field")
    }

  
});

const authUser=asyncHandler (async (req,res)=>{

    const {email,password}=req.body;
    const user=await User.findOne({email});
    const isMatch=await bcrypt.compare(password,user.password)

    if(user && isMatch){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),
            "auth":"login successfully...!",
        });
    }else{
        res.status(400);
        throw new Error ("Invalid Email and Password");
    }
  
})

module.exports={registerUser,authUser };