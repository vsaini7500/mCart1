const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema({
    brandName:{
        type:String,

    },
    isActive:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("brand",brandSchema)