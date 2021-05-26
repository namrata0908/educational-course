const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fname: {
          type: String,
        required: true
    }, 
    password:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },   
    isMember:{
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('student',studentSchema)