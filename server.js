import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const PORT=process.env.PORT || 8080;

const app=express();

app.get('/',(req,res)=>{
  res.json({message:"This is Working. Completely running on Docker Container.Ok"})
})

app.listen(PORT,()=>{
  console.log(`App running on ${PORT}`);
})
