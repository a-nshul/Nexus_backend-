const mongoose = require('mongoose');

const registrationSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    contact:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    },
    delegates:{
        type:String,
        enum: ['Regular', 'VIP', 'Student'],
        required:true
    }
},{timestamps:true});

const registration=mongoose.model('Registration',registrationSchema);

module.exports=registration;