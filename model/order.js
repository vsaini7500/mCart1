const string = require('joi/lib/types/string')
const mongoose=require('mongoose')


const orderScheema=mongoose.Schema({
    customerId:{
        type:string
    },
    productId:{
        type:string
    },
    baseCost:{
        type:Number
    },
    Discount:{
        type:Number
    },
    Unit:{
        type:Number
    },
    Status:{
        type:Boolean
    },
    adressId:{
        type:String
    }
})