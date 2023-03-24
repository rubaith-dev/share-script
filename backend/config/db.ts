import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    console.log("Connection", error);
  }

  const connection = mongoose.connection;

  if (connection.readyState >= 1) {
    console.log("Connected to DB");
    return;
  } 
  connection.on("error", ()=>console.log("DB connection failed"))
};

export default connectDB
