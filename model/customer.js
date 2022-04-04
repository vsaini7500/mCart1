const mongoose=require('mongoose')
const CustomerSchema=mongoose.Schema({

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
        type:String,
        reqired:true
    },
    Email:{
        type:String
    },
    OTP:{
        type:Number
    },
    countryCode:{
        type:String,
        default:'+91'

    },
    Status:{
        type:String,
        default:'Active'

    },
    isDleleted:{
        type:Boolean,
        default:false
    }

    
})

const customer=mongoose.model("customer",CustomerSchema)
 module.exports=customer