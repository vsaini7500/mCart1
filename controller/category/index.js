const express=require('express')


const router=express.Router();
router.use(express.json());
const schema=require('../../model/category')

const categoryInfo=require('./category')

router.post("/",categoryInfo.addCategory)
router.get('/',categoryInfo.getAllCategory)

module.exports=router;