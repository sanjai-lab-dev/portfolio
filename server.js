import express from 'express'
import cors from 'cors'


const app=express();
const port=4000;

app.use(express.json());
app.use(cors())


app.listen(port,()=>{
  console.log("server is running");
})

app.get("/",(req,res)=>{
  res.send("hello");
})
app.get("/home",(req,res)=>{
  res.json;
})

app.get("/data",(req,res)=>{
  res.send("data recived");
  console.log(req.body);
})