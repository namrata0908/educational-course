const express = require('express')
const router = express.Router()
const student = require('./db_initialize')

router.post('/', async(req,res) => {
    console.log('Data is here')
    const {email, password} = req.body
    student.findOne({email:email},function(err,student){
        try{
                if(password===student.password){
                    res.json({code:202}) // Successfully logged in
                    console.log(student)
                }
                else{
                    res.json({code:200}) // Wrong password
                }
        }
        catch(err){
            res.send('Error in login' + err)
        }
    })
            console.log('Login Request')
})

module.exports = router;