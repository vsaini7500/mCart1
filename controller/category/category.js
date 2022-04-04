const HttpStatus = require('http-status');
const errors = require('../../errors/index');
const categorymodel = require("../../model/category")

const addCategory = async(req,res,next) =>{

    try{
        const categoryName=req.body.categoryName

        let categoryAllready = await categorymodel.findOne({"categoryName": {$regex:new RegExp(categoryName,"i")}})
        if(categoryAllready){
            return res.send(errors.allreadyExist)
        }
        var data=req.body
        console.log(data);

        var result= await categorymodel.insertMany(data)
        if(result){
            res.send(result)
        }
        else{
            res.send('category is not add')
        }
    }
    catch(error) {
        return next(error)
    }
}
const getAllCategory=async (req,res)=>{

       try {
           const data =await categorymodel.find({isDeleted:false},{"isDeleted":0})

           if(data!=null){
               res.send(data)
           }
           else{
               res.send('data is not exist')
           }


       } catch (error) 
       {
           res.send(error)
           
       }

}

module.exports={addCategory,getAllCategory}