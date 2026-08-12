const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb is connected successfully!")
    }catch(error){
        console.error("Mongodb is connection failed!",error.message);
        process.exit(1);
    }
}
module.exports = connectDB;