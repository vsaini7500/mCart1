const res = require('express/lib/response');
const merchantModel=require('../../model/merchant')
const httpStatus=require('http-status');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const bcryptjs = require('bcryptjs');


const insert=async(req,res,next)=>{

    try{

        const email=req.body.Email
        const check= await merchantModel.findOne({"Email":email})

        if(check){
            return res.send('EmailExistError')
        }
        const salt = await bcrypt.genSalt(10)
       let  password=req.body.password
       let  encryptedPassword =  bcryptjs.hashSync(password, salt);
         req.body.password=encryptedPassword
     
          var data=req.body
    
        let getdata=await merchantModel.insertMany(data)
        if(getdata.error){
            res.status(httpStatus.Bad_REQUEST).json({message:getdata})

        }
        else{
            res.status(httpStatus.OK).json(getdata)
        }

    }catch(err){
        next(err)

    }

};

const login=  async (req, res) => {
      
    try {
        let result =await merchantModel.findOne({Email:req.body.Email});
    if(result!=null){
        if(req.body.password==null){
            return res.send('please fill password')
        }
     var match =await bcryptjs.compare(req.body.password,result.password)
     if(match){
         var privateKey = "aqswdefrgthjukilpmnvxzaxvdfcxhwdgexcthsbbt";
         let params = {
             Email:req.body.Email,Password:req.body.Password
         }
         var token =  jwt.sign(params,privateKey,{expiresIn:'1d'});
         res.status(200).json({message:"token",token:token});
     }else{
         res.send("Invalid Password")
     }}else{
        res.send("Invalid Email")
     }
        
    } catch (error) {
        res.send(error)
        
    }
    }

const getProfile=async (req, resp) => {
  try {
      let email=req.body.Email
    let data =await merchantModel.findOne({Email:email,isDeleted:false},{isDeleted:0,Status:0});
    if(data!=null){
    resp.json(data);
    }else{
       resp.send("Invalid ID")
    }                                       
 }      
   catch (error) {
      res.send(error)
      
  }
}

 const updateProfile= async(req,res)=>{
   try {

    var flag=await merchantModel.findOne(req.query)
  
    if(flag!=null){
        var data=req.body
        var id=req.query.Email
     
        var result=await merchantModel.updateOne({Email:id,isDeleted:false},data)
        if(result.modifiedCount!=0){
            res.send(result)
        }
        else{
            res.send('invalid id')
        }
    }
     else{
              res.send('Invaliad id');
     }
   } catch (error) {
       res.send(error);
   }

  };
  const deleteMerchant=async (req,res)=>{
    
     try {

        var flag=await merchantModel.findById({_id:req.params.merchantId})
  
    if(flag!=null){
        var data=req.body
        var id=req.params.merchantId

        var result=await merchantModel.findOneAndUpdate({_id:id},{"isDeleted":true})
        if(result!=null){
            res.send('successful delete')

        }
        else{
            res.send('delete operation is not successfull')
        }
        
    }
    else{
        res.send('Invalid id')
    }
         
     } catch (error) {
         console.log(error);
         
     }

  }


 

module.exports={insert,login,getProfile,updateProfile,deleteMerchant}