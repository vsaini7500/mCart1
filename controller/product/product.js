const productModel = require("../../model/product")
const merchantModel = require("../../model/merchant")
const HttpStatus = require('http-status');
const errors = require('../../errors/index');

const addProduct = async(req,res,next) =>{
    let {serialNo} = req.body
    try{
        const existingProduct = await productModel.findOne({"serialNo":{$regex: new RegExp(serialNo,"i")}})
        if(existingProduct){
            return res.send(errors.serialNoExistError)
        }

        const addproduct = new productModel(req.body)
        product = await addproduct.save()
    }catch(error){
        return next(error)
    }
    res.status(HttpStatus.OK).json({product:product, status:200, success:true})
}


const allProduct = async(req,res,next) =>{
    
    try{
        let limit = 0 ; let skip = 0
        if(req.query.limit!=null || req.query.limit!=0){
            limit= req.query.limit
        }
        if(req.query.skip!=0 || req.query.skip != 0){
            skip = req.query.skip
        }

        let id=req.body.merchantId
        

       const data = await productModel.find({"merchantId":id,"isDeleted":false},{isDeleted:0,createdAt:0,updatedAt:0}).limit(limit).skip(skip)

       if(data!=null){
        res.status(HttpStatus.OK).json({product:data, status:200, success:true})

       }
       else{
           res.send('product not found')
       }


    }catch(error){
        return next(error)
}
}
const productSort = async(req,res,next) =>{
   

    let data = await productModel.find({isDeleted:false}, {_id:0,isDeleted:0,updatedAt:0,merchantId:0,createdAt:0,Size:0}).sort(req.query)
    if(!data){
        return res.send(errors.productnotfound)
    }
    else{
        res.status(HttpStatus.OK).json({result:data,status:200, success: true})
    }
}
const filterByBrandOrCategory = async(req,res,next) =>{
try {
    let limit = 0 ; let skip = 0
    if(req.query.limit!=null || req.query.limit!=0){
        limit= req.query.limit
    }
    if(req.query.skip!=0 || req.query.skip != 0){
        skip = req.query.skip
    }
const data = await productModel.find({$and:[req.body,{isDeleted:false}]},{isDeleted:0}).limit(limit).skip(skip)
console.log(data)
if(!data){
    return res.send("data is empty")
}else{
    res.status(HttpStatus.OK).json({result:data, status:200, success:true})
}
} catch (error) {
    res.send(error)
    
}
}
const filterByName = async(req,res,next) =>{
    let limit = 0 ; let skip = 0
    if(req.query.limit!=null || req.query.limit!=0){
        limit= req.query.limit
    }
    if(req.query.skip!=0 || req.query.skip != 0){
        skip = req.query.skip
    }
    const {name} = req.params
    const data = await productModel.find({ "name": { $regex: new RegExp(name, "i") } })
    console.log(data)
    if(!data){
        return res.send("data is empty")
    }else{
        res.status(HttpStatus.OK).json({result:data, status:200, success:true})
    }
    }
   
           
    const productgetbyProductId = async(req,res,next) =>{
        let limit = 0 ; let skip = 0
        if(req.query.limit!=null || req.query.limit!=0){
            limit= req.query.limit
        }
        if(req.query.skip!=0 || req.query.skip != 0){
            skip = req.query.skip
        }
     try { 
          const productId = req.body._id
        const data = await productModel.find({"_id":productId,"isDeleted":false},{"isDeleted":0,"updatedAt":0,"createdAt":0}).limit(limit).skip(skip)
        if(!data){
            return res.send("form this id no data found")
        }
        else{
            return res.status(HttpStatus.OK).json({result:data,status:200, success:true})
        }
    }catch(error){
        return next(error)
    }
    };



     const deleteProduct = async (req, res) => {
    try {

        const id=req.body._id
    
        var flag = await productModel.findOne({_id:id})
        if (flag.length!=0||flag!=null) 
        {
            var check= await productModel.findOne({_id:id,"isDeleted":false})
            if(check!=null){
           const result= await productModel.updateOne({_id:id},{isDeleted:true})
            if(result!=null){
                res.send(result)
            }
            else{
                res.send('product is not found')
            }

            }
            else{
                res.send("product is not exist")
            }
        }
         else
          res.send({status:500,Error:errors.merchantDoesNotExist})
     }
  
     catch (error) {
        res.send(error)
        
    } 
    }
     
const updateProduct = async(req,res) =>{
   try {
    const id = req.body._id
    const flag = await productModel.find({_id:id})
    if(flag.length != 0 || flag !=null){
        let data = req.body
        var result = await productModel.updateOne({_id:id,isDeleted:false},data)
        if(result!=null){
            res.send(result)
           var date= await productModel.updateOne({_id:id},{$set:{"updatedAt":Date.now()}})

        }
        else{
            res.send('Product is not exist')
        }
    }
       
   } catch (error) {
       res.send(error)
       
   }

}
    

const searchByProduct = async(req,res,next) =>{
    let limit = 0 ; let skip = 0
    if(req.query.limit!=null || req.query.limit!=0){
        limit= req.query.limit
    }
    if(req.query.skip!=0 || req.query.skip != 0){
        skip = req.query.skip
    }
    try{
    
    let result = await productModel.find({$and: [req.query,{isDeleted:false}]},{isDeleted:0,createdAt:0,updatedAt:0}).limit(limit).skip(skip)
       if(result!=null ){
        res.status(500).json({result: result })

       } else{
           res.send("not exist")
       }
     
    }catch(error){
        return next(error)
    }
}


const productDetail = async(req,res,next) =>{
 try { 
      const productId = req.body._id
    const data = await productModel.findOne({"_id":productId,"isDeleted":false},{"isDeleted":0,"updatedAt":0,"createdAt":0})
    if(data!=null){
        return res.status(HttpStatus.OK).json({result:data,status:200, success:true})
    }
    
    else{
        return res.send("form this id no data found")
    }

        
}catch(error){
    return next(error)
}
};


module.exports = {
    addProduct,
    allProduct,
    productSort,
    filterByBrandOrCategory,
    productgetbyProductId,
    deleteProduct,
    updateProduct,
    searchByProduct,
    productDetail
}