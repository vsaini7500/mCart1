const mongoose=require('mongoose')

const bcrypt=require('bcrypt')
const merchantSchema=mongoose.Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    Gender:{
        type:String
    },
    DOB:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    Email:{
        type:String
    },
    password:{
        type:String,
        // required:true
    },
    countryCode:{
        type:String
    },
    Status:{
        type:String,
        default:'Active'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

const merchent=mongoose.model('merchant',merchantSchema)
module.exports=merchent