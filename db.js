const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conexion Exitosa');
    }catch(error){
        console.error(error)
    }
};

module.exports = {connectDB};