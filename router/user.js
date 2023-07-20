const { default: axios } = require("axios");
const express=require("express");
const UserRoute=express.Router();
let url="https://gpt-api.richexplorer.com/api/general"

UserRoute.post("/",async(req,res)=>{
  let {feeling,job,issue}=req.body;
  console.log(req.body);
  let body={
    "usecase": "GPT_MEDITATION_CREATOR",
    "userInput": `feeling ${feeling} right now, they currently are ${job} and facing ${issue} issues today`}
    
          let response=await axios.post(url,
              body
          );
        let data= response.data;
    res.status(201).send(data.generatedText);
})

module.exports={
    UserRoute
}