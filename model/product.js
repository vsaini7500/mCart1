const date = require('joi/lib/types/date')
const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
   categoryName:{
        // type:mongoose.Schema.Types.ObjectId,
    //    ref:"categories"
    type:String,
    enum:['Fashhion','Electronics','Furniture','Home and kitchen','Books','Gifts','Footwear'],
    required:true
   },
   merchantId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"merchants"
   },
   Name:{
       type:String,
       required:true
   },
   sortDescription:{
       type:String,
       trim:true,
       minLength:5,
       maxLength:30,
       required:true
   },
   longDescription:{
       type:String,
       trim:true,
       minLength:25

   },
   Unit:{
       type:Number,
       default:1
    
    },
   baseCost:{
       type:Number
   },
   discountedCost:{
       type:Number
   },
   Discount:{
     type:Number,
     min:5,
     max:80
   },
   brandName:{
       type:String,
       required:true
   },
   Size :{
       type:String,
       enum:['S','M','L','XL','XXL']
   },
   isDeleted:{
       type:Boolean,
       default:false

   },
   serialNo:{
       type:String,
       unique:true
   },
   createdAt:{
       type:Date,
       default:Date       
   },
   updatedAt:{
       type:Date
   }
  
})
productSchema.pre('save', async function (next) {
    try {
        this.discountedCost =this.baseCost -( this.Discount*0.01*this.baseCost) 
        next()

    } catch (error) {
        next(error)
    }

})
const product=mongoose.model('product',productSchema)
module.exports=product