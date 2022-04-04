const customerModel=require('../../model/customer')
const httpStatus=require('http-status');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

const bcryptjs = require('bcryptjs');


const AddCustomer=async (req,res)=>{

   try {
      let email=req.body.Email;
      let phoneNumber=req.body.phoneNumber

      var check= await customerModel.findOne({$or:[{"Email":email},{"phoneNumber":phoneNumber}]})
      console.log(check);

      if(check){
          return res.send('customer is allready exist')
      }

    var data =req.body
   //  console.log(data);

    const result = await customerModel.insertMany(data)

    if(result){
       res.send(result)
    }
    else{
       res.send("data not inseted")
    }
       
   } catch (error) {

      res.send("Error"+error)
       
   }
}

const login=async (req,res)=>{

   try {
      
   } catch (error) {
      
   }
}







module.exports={AddCustomer}