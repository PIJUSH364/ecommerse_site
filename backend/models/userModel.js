const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
       password:{
            type:String,
            required:true,
        },
        isAdmin:{
            // just in case we need
            type:Boolean,
            required:true,
            default:false,
        },
        pic:{
            type:String,
            required:true,
            default:"https://static.thenounproject.com/png/2014807-200.png"
        },
    },
    {
        timestamps:true,
    }
);

userSchema.pre("save",async function (next) {
    
    // ? If password not change then if block run otherWise else 
    if (!this.isModified("password")) {
        // *  next() is a middleWare goes to next action
        next(); 
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt); 
})

const User=mongoose.model("User",userSchema);
module.exports=User;