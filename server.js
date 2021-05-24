const express = require('express');
const app = express();
const port = 3010
app.use(express.json());
app.use(express.static('./'));


app.use(function(req,res,next)
{
	res.header("Access-control-Allow-Origin","*");
	res.header("Access-control-Allow-Headers","Origin,X-Requestsed-With,Content-Type,Accept");
	next();
})

app.get('/hello',function(req,res){
	res.json({A:1});
	console.log('Working');
})

app.post('/register',(req,res)=>{
    const { fname, password, phone, email} = req.body
    console.log(req.body)
})


app.listen(port,() => {
	console.log("app is running on Port " + port)	
})
