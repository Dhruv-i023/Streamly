// import mongoose, { Mongoose } from "mongoose"
// import { DB_NAME } from "./constants";
// import express from "express"
// import { error } from "console";

// const app = express()

// async function dbConnect() {
//     try {
//         await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
//         app.on("error", ()=>{
//             console.log("ERR", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("ERROR:", error);
//         throw error;        
//     }
// }

// dbConnect();
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import connectDB from "./db/index.js";

connectDB();