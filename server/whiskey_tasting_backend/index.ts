var express = require("express");
var app = express();

app.get("/test", (req,res,next) =>{
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, ()=> {
    console.log("Backend for Whiskey Tasing Project is running on port 3000");
});