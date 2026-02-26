const mongoose = require("mongoose");


const connectDB = async () => {
  try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("mongo ok")
  } catch (error) {
    console.error("erro ao conectar com o banco", error.message);
    process.exit(1);
  }
}

module.exports = connectDB