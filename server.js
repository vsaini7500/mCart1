const express=require('express')
const mongoose=require('mongoose')
const merchant=require('./controller/merchant/index')
const product=require('./controller/product/index')
const category=require('./controller/category/index')
const customer=require('./controller/customer/index')
const customerAddress=require('./controller/custmoerAdress/index')
// const port =process.env.port
const app=express();
app.use('/merchant',merchant)
app.use('/merchant/inventory',product)
app.use('/category',category)
app.use('/customer',customer)
app.use('/custmerAdress',customerAddress)


mongoose.connect('mongodb+srv://vikas:Vikas7500@cluster0.lqc8n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log("Error"+err);
}
)
app.listen(8050,()=>{
    console.log('successful run at particular port');
})