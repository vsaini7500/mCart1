const joi=require('joi')


const create = joi.object().keys({
    firstName: joi.string().min(3).max(10).required(),
    lastName: joi.string().min(3).max(10).required(),
    Gender:joi.string().valid(['male','female']),
    DOB:joi.string(),
    phoneNumber: joi.string().length(10).regex(/^[0-9]+$/).required(),
    Email: joi.string().email().required(),
    Password:joi.number().required(),
    // Password: joi.string().required(),
    countryCode:joi.string(),
    Status:joi.string().default('Active'),
    isDeleted:joi.boolean().default(false)
    
});
const forUpdate=joi.object().keys({
    firstName:joi.string().min(3).max(10).required(),
    lastName:joi.string().min(3).max(10).required(),
    Gender:joi.string().valid(['male','feale']),
    Status:joi.string().default('Active')
})