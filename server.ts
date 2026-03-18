import express from "express";
import cors from "cors"
import connectDB from "./config/db.js";

const app = express();
 const Port=process.env.PORT || 5000;
 connectDB();
 
app.use(cors());
app.listen(Port,()=>{
    console.log('');
    
})