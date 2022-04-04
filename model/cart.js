const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({

    customerId:{
        type:String
    },
    productId:{
        type:String
    },
    Unit:{
        type:Number
    },
    Discount:{
        type:Number
    },
    baseCost:{
        type:Number
    },
    createdAt:{
        type:Date
    }
})