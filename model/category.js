const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model("category",categorySchema)