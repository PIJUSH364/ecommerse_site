const  jwt = require('jsonwebtoken');

const expire={
    expiresIn:"30d",
};

const generateToken =(id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET,expire);
};

module.exports=generateToken;