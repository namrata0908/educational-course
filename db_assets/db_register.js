const express = require('express')
const router = express.Router()
const student = require('./db_initialize')

router.get('/', async(req,res) => {
    try{    console.log('Get Request')
            const students = await student.find()
            res.json(students)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const Student = new student({
        fname: req.body.fname,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email

    })

    try{console.log('post request')
        const a1 =  await Student.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router