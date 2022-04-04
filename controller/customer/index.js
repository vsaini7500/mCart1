const express =require('express')

const router = express.Router();
router.use(express.json());

const schema = require('./customerSchema');
const {requestValidator } = require('../../middleware/request_validator');

const customerInfo=require('./customer')
const CH = require("../../middleware/auth")

router.post('/',customerInfo.AddCustomer)

module.exports=router
