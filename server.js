const express = require('express');
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const url = "mongodb://localhost/studentData"

const app = express();
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
app.use(express.json());
app.use(express.static('./'));

app.use(function(req,res,next)
{
	res.header("Access-control-Allow-Origin","*");
	res.header("Access-control-Allow-Headers","Origin,X-Requestsed-With,Content-Type,Accept");
	next();
})

const db_register = require('./db_assets/db_register')
app.use('/register',db_register)


const db_login = require('./db_assets/db_login')
app.use('/login',db_login)

con
.once('open',() => console.log("Connected..."))
.on('error', error => {
	console.log('Your Error',error);
});

app.get("/about", (req,res) => {
	res.send("Lode yaha about ayega bsdk!");
});

/*
app.get('/hello',function(req,res){
	res.json({A:1});
	console.log('Working');
})


app.post('/register',(req,res)=>{
    const { fname, password, phone, email} = req.body
    console.log(req.body)
})
*/

app.listen(port,() => {

	console.log("app is running on Port " + port)	
})
