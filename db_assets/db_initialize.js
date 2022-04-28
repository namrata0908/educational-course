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
    },
    v1:{
        type: Number
    },
    v2:{
        type: Number
    },
    v3:{
        type: Number
    },
    v4:{
        type: Number
    },
    v5:{
        type: Number
    }

})
studentSchema.set('timestamps', true);
module.exports = mongoose.model('student',studentSchema)