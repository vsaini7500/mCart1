const mongoose=require('mongoose')


const merchantAdressSchema=mongoose.Schema({
    maerchantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"merchants"

       },
    houseNo:{
        type:String
    },
    Colony:{
        type:String
    },
    Area:{
        type:String
    },
    pinCode:{
        type:Number
    }, 
    State:{
        type:String
    },
    Country:{
        type:String
    }


})