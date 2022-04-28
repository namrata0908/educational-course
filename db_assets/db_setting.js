const express = require('express')
const router = express.Router()
const student = require('./db_initialize')
const jwt = require('jsonwebtoken');


router.post('/', async(req,res) => {
                    var token = req.body.token
                    var decoded = jwt.decode(token);
                    // console.log("decoded jwt")
                    // console.log(decoded)
                    var email = decoded.email

            student.findOneAndUpdate({email:email},{$set:{email:req.body.email,firstname:req.body.firstname,lastname:req.body.lastname,phone:req.body.phone}},function(err,student){
                try{
                    res.json({code:200})            //updated successfully
                } 
                catch(err){
                    res.json({code:403})           // permission denied
                }
    })

})


module.exports = router;