import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MOOGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host Name : ,
      ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
