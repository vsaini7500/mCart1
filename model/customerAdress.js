const mongoose=require('mongoose')

const customerAdressSchema=mongoose.Schema(
 
 
 [{
     customerId:{
         type:mongoose.Types.ObjectId,
         ref:"cutomers"
     },
    houseNo:{
        type:Number
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
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
    
}]
)

const customerSchema=mongoose.model("customerAdress",customerAdressSchema)
module.exports=customerAdressSchema