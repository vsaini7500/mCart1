const express= require('express');
//const { userInfo } = require('os');
const router = express.Router();
router.use(express.json());

const schema = require('./merchantSchema');
const {requestValidator } = require('../../middleware/request_validator');

const merchantInfo=require('./merchant')
const CH = require("../../middleware/auth")


router.post("/",requestValidator(schema.create),merchantInfo.insert)
router.post('/login',merchantInfo.login)
router.get('/profile',CH.JWT,merchantInfo.getProfile)
router.put('/profile',requestValidator(schema.forUpdate),CH.JWT,merchantInfo.updateProfile)
router.delete('/',CH.JWT,merchantInfo.deleteMerchant)

module.exports=router;