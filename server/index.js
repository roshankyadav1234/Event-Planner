import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";


import  connectDB  from "./src/config/db.js";
import  AuthRouter   from "../server/src/routes/authRouter.js";





const app = express();

app.use(cors({origin:"http://localhost:5173",credentials: true}));

app.use(express.json());
app.use(morgan("dev"));


app.use("/auth",AuthRouter); 

app.get("/",(req,res)=>{
    res.json({message:"server connected"});
});

app.use((err,req,res,next)=>{
    
    const errorMessage = err.message || "Internal Server Error"
    const errorCode = err.statusCode || 500
    res.status(errorCode).json({message:errorMessage})

})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server started at",port);
    connectDB();
});