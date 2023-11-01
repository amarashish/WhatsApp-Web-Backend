import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;

const url = `mongodb+srv://${userName}:${passWord}@cluster0.bzpol4t.mongodb.net/?retryWrites=true&w=majority`; //deployed
// const url = `mongodb+srv://${userName}:${passWord}@cluster0.y4qchjl.mongodb.net/?retryWrites=true&w=majority`; // local

const Connection = async()=>{
    try{
        await mongoose.connect(url, {useUnifiedTopology: true});
        console.log("Connected to DB Successfully");
    }catch(error){
        console.log("Error while connecting with the database", error.message);
    }
};

export default Connection;