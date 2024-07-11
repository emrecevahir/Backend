const { Schema, model } = require("mongoose")
var validator = require("validator")

const productSchema = new Schema({
    productName :{type : String, required :[true,'productName is required']},
    price : {type : Number,required : [true,'Price field is required']},
    quantity : {type : Number, required :[true,'Quantity is required']},
    image : {type : String, required :[true,'Image is required']},
    category:{type : String,required :[true,'Category is required']},
    company:{type : String,required :[true,'Company is required']},
    cartQuantity:{type : Number,default : 1}

})
const Product = model('Product',productSchema)
module.exports=Product