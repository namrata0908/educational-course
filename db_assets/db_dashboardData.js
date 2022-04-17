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

                    student.findOne({email:email},function(err,student){
                        try{
                            const {firstname,lastname} = student
                            const payment = student.payment,sessionDone = student.sessionDone,completion = student.completion 
                            res.json({firstname : firstname,lastname:lastname,payment:payment,sessionDone:sessionDone,completion:completion})
                            // console.log(firstname,lastname,payment,sessionDone,completion)
                        }
                        catch(err){
                            res.send("err" + err)
                        }
                    })

})




module.exports = router;