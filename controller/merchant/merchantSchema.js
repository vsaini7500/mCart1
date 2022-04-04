const joi=require('joi')

const create=joi.object().keys({
    firstName:joi.string(),
    lastName:joi.string(),
    Gender:joi.string().valid('male','female'),
    DOB:joi.string(),
    phoneNumber:joi.string().length(10).regex(/^[0-9]+$/).required(),
    Email:joi.string().trim().email().required(),
    OTP:joi.number().required().error(new Error('please fill password')),
    countryCode:joi.string().default('+91'),
    Status:joi.string().default('Active'),
    isDeleted:joi.boolean().default(false)
})

const forUpdate=joi.object().keys({
    firstName:joi.string(),
    lastName:joi.string(),
    Gender:joi.string(),
    DOB:joi.string(),
    phoneNumber:joi.string().length(10).regex(/^[0-9]+$/).required(),
    countryCode:joi.string().default('+91'),
    Status:joi.string().default('Active'),
    isDeleted:joi.boolean().default(false)
})

module.exports={create,forUpdate}

