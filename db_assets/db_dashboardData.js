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

router.post('/session', async(req,res) => {
    var token = req.body.token
    console.log("/session")
    var v1 = req.body.v1
    var v2 = req.body.v2
    var v3 = req.body.v3
    var v4 = req.body.v4
    var v5 = req.body.v5
    var decoded = jwt.decode(token);
    var sessionDone = v1+v2+v3+v4+v5    // console.log("decoded jwt")
    
    var email = decoded.email
    var res = await student.updateOne({email:email},{$set:{v1 : v1,v2 : v2,v3 : v3,v4 : v4,v5 : v5,sessionDone : sessionDone}})
    console.log(res)
    if(!res)  return res.status(404).send('The student record not Updated')
    res.status(200).send('Student Record Updated')
})

router.post('/session2', async(req,res) => {
    var token = req.body.token
    var decoded = jwt.decode(token)
                    // console.log("decoded jwt")
                    // console.log(decoded)
                    var email = decoded.email

                    student.findOne({email:email},function(err,student){
                        try{
                            var v1 = student.v1
                            var v2 = student.v2
                            var v3 = student.v3
                            var v4 = student.v4
                            var v5 = student.v5

                            var completion = (v1+v2+v3+v4+v5)/5*100
                            res.json({completion:completion,v1:v1,v2:v2,v3:v3,v4:v4,v5:v5})
                            
                        }
                        catch(err){
                            res.send("err" + err)
                        }
                    })
})


module.exports = router;