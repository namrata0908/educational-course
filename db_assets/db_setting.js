const express = require('express')
const router = express.Router()
const student = require('./db_initialize')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const secret = require('./config')


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

router.post('/pwd', async(req,res) => {
                    var token = req.body.token
                    var pwd = req.body.pwd
                    var newpwd = req.body.newpwd                  
                    var decoded = jwt.decode(token);
                    // console.log("decoded jwt")
                    // console.log(decoded)
                    var email = decoded.email


    //         student.findOneAndUpdate({email:email},{$set:{email:req.body.email,firstname:req.body.firstname,lastname:req.body.lastname,phone:req.body.phone}},function(err,student){
    //             try{
    //                 res.json({code:200})            //updated successfully
    //             } 
    //             catch(err){
    //                 res.json({code:403})           // permission denied
    //             }
    // })
        var isValidPass = false
        var a = await student.findOne({email:email})
        // console.log(a)
        if(a !== null)   {
            await student.findOne({email:email},function(err,student){
            try{    
                isValidPass = bcrypt.compareSync(pwd, student.password);
                console.log(isValidPass)
            }
            catch(err){
                res.send('Error in login' + err) // Email doesn't Exist
            }
        })
                        console.log(isValidPass)
                if(isValidPass){
                    const saltRounds = 12
                    const hash = await bcrypt.hash(newpwd, saltRounds);
                    await student.findOneAndUpdate({email:email},{$set:{password:hash}},function(err,student){
                        try{
                            res.json({code:200})           // password changed successfully
                        }
                        catch(err){
                            res.json({code:403})           // permission denied
                        }
                    })
                }
                else{
                    res.json({code:401}) // Wrong password
                }
        }
        else{ 
        res.json({code:203})    // Email doesn't Exist
        }

})

module.exports = router;