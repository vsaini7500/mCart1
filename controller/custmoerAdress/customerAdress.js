const customerAdressModel=require('../../model/customerAdress')
const httpStatus=require('http-status');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

const bcryptjs = require('bcryptjs');


const addCustomerAdress= async (req,res)=>{

    try {
        let data=req.body
        const result=await customerAdressModel.insertMany(data)
        if(result){
            res.send(result)
        }
        else{
            res.send('not inserted')
        }
        
    } catch (error) {
        res.send(error)
    }
}


module.exports={addCustomerAdress}