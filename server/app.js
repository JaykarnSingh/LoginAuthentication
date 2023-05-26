const express=require('express');
const app=express();
const cors=require("cors")
require('./connection')
const router=require('./route/user')
PORT=process.env.PORT||8000;


app.use(express.json());
app.use(cors());
app.use('/',router);



app.listen(PORT,()=>{
    console.log(`server started ap PORT : ${PORT}`)
})