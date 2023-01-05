const express=require('express');
const users_routes=require('./routes/users.js');
const bodyParser=require('body-parser');

//initiate express
const app=express();

const mongoose=require('mongoose');

mongoose.connect(
  'mongodb://localhost/Charlie',()=>{
    console.log("MongoDB Connected!")
  }
);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.json());

app.use("/api/users",users_routes);

//create server
app.listen(4000,()=>{
    console.log("server connected and running succesfully!");
});
