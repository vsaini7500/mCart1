const express=require('express')
const router=express.Router()

const cAddInfo=require('./customerAdress')

router.post('/',cAddInfo.addCustomerAdress)



module.exports=router
