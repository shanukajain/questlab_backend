const express=require("express");
const cors=require("cors");
const { UserRoute } = require("./router/user");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());
const port=process.env.port;
app.get("/",(req,res)=>{
res.send("HOME PAGE");
})

app.use("/user",UserRoute);
app.listen(port,()=>{
    
    console.log("4000 port");
})