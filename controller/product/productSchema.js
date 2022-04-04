

const joi=require('joi')
// const number = require('joi/lib/types/number')

// const create=joi.object().keys({
// categoryId:{
//     //    type:mongoose.Schema.Types.ObjectId,
//     //    ref:"categorys"
//     type:String
//    },
//    merchantId:{
//        type:mongoose.Schema.Types.ObjectId,
//        ref:"merchants"
//    },
//    Name:{
//        type:String
//    },
//    sortDescription:{
//        type:String
//    },
//    longDescription:{
//        type:String
//    },
//    Unit:{
//        type:Number,
//        default:1
    
//     },
//    baseCost:{
//        type:Number
//    },
//    discountCost:{
//        type:Number
//    },
//    brandName:{
//        type:String
//    },
//    Size :{
//        type:String,
//        enum:['S','M','L','XL','XXL']
//    },
//    isDeleted:{
//        type:Boolean,
//        default:false

//    },
//    serialNo:{
//        type:String,
//        unique:true
//    },
//    createdAt:{
//        type:Date,
//        default:Date
       
//    },
//    updatedAt:{
//        type:Date
//    }
  
// })


const forupdate=joi.object().keys({

    sortDescription:joi.string(),
    longDescription:joi.string(),
    Unit:joi.number(),
    baseCost:joi.number(),
    Size:joi.string(),
})

module.exports={forupdate}