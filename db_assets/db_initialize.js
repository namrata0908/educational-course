const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    firstname: {
          type: String,
        required: true
    },
    lastname: {
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
    payment:{
        type: Number
    },
    sessionDone:{
        type: Number
    },
    completion:{
        type: Number
    }
})
studentSchema.set('timestamps', true);
module.exports = mongoose.model('student',studentSchema)