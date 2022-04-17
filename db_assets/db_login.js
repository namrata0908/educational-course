const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const student = require('./db_initialize')
const jwt = require('jsonwebtoken');
const secret = require('./config')

router.post('/', async(req,res) => {
    console.log('Data is here')
    const {email, password} = req.body
    try{    var a = await student.findOne({email:email})
        if(a !== null)   {
            student.findOne({email:email},function(err,student){
        try{    const isValidPass = bcrypt.compareSync(password, student.password);
                if(isValidPass){
                    const token = jwt.sign({email, password},secret, { expiresIn: '24h' })  //creating token

                    res.json({code:202, token : token}) // Successfully logged in
                    console.log(student)
                }
                else{
                    res.json({code:200}) // Wrong password
                }
        }
        catch(err){
            res.send('Error in login' + err) // Email doesn't Exist
        }
    })
}
    else{ 
        res.json({code:203})    // Email doesn't Exist
    }
}
    catch(error){
                console.log('Error' + error)
    }  
            console.log('Login Request')
})

module.exports = router;