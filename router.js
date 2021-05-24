const express = require('express');
const app = express();

app.get('/hello2', function (req,res) {
 
    res.json({a:1,b:2});
    console.log("Request Active");
   
   })


