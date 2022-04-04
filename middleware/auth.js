var bodyParser = require("body-parser")
var urlencoderParser = bodyParser.urlencoded({extended:false})
const jwt = require("jsonwebtoken");

// require("dotenv").config()

var JWT = async (req,res,next)=>{
var token = req.headers.authorization;
var privateKey = "aqswdefrgthjukilpmnvxzaxvdfcxhwdgexcthsbbt"
jwt.verify(token,privateKey,function(err,docs){
    if(err){
              res.send("invalid token");
    }else{
        next();
    }
})
}

module.exports={JWT}