const express = require('express');
const router = express.Router();
const productRouter = require("./product")
const token = require("../../middleware/auth")
const schema = require('./productSchema');
const {requestValidator } = require('../../middleware/request_validator');
// merchant/inventory/product


router.post("/product", token.JWT,productRouter.addProduct)
router.delete("/product", token.JWT,productRouter.deleteProduct )
router.put("/product",requestValidator(schema.forupdate),token.JWT, productRouter.updateProduct )
router.get("/product",token.JWT,productRouter.productgetbyProductId)


// merchant/ inventory API

router.get("/allProduct",token.JWT, productRouter.allProduct)
router.get("/searchProduct",token.JWT, productRouter.searchByProduct)
router.get("/productSort",token.JWT,productRouter.productSort )
router.get("/productDetail",token.JWT,productRouter.productDetail)





// router.get("/product/categoryName/" ,productRouter.filterByCategoriesName)
router.get("/product/filterByBrandOrCategory",token.JWT, productRouter.filterByBrandOrCategory)

module.exports = router