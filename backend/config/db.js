const mongoose = require('mongoose');
const connectDB=async ()=>{
 try {
    const client=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`mongoDB  connected :${client.connection.host}`);
 } catch (error) {
    console.log(`Error on mongoDb : ${error.message}`);
    process.exit();
 }
}

module.exports=connectDB;