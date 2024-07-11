const express = require("express")
const Product = require("../models/ProductModel")
const ProductRouter = express.Router()

ProductRouter.post("/addProduct",async(req,res)=>{
    try {
        let newProduct = req.body
        let savedData = await Product.create(newProduct)
        res.send({
            status:true,
            data : savedData,
            message : "Product Created"
        })
        
    }
    catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message)
    }
})

ProductRouter.delete("/products",async(req,res)=>{
    try {
        let {id} = req.body
        const deletedProduct = await Product.findByIdAndDelete(id)
        console.log(deletedProduct)
        if(!deletedProduct){
            return res.status(404).send({status : false, message : "Product not Deleted"})
        }
        res.status(200).send({status : true,message :'Product Deleted'})

    } catch (error) {
    res.status(404).send({status:false, message : error.message})
    console.log(error.message)  

    }
})

ProductRouter.put("/products",async(req,res)=>{
    try {
        let{_id} =req.body
        if (!_id) 
        {
            res.status(404).send({status:false,message:"Update Edilecek Id yok"})
        } 
        else {
            const updatedProduct = await Product.findByIdAndUpdate(_id,req.body)
            res.send({
            status : true,
            data : updatedProduct ,
            message : "Product Updated"
            })
        }
        } 
    catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message) 
    }
})

ProductRouter.get("/products",async(req,res)=>{
    try {
        const allProduct = await Product.find({})
        res.status(200).send({status : true , message:"All Product",data : allProduct
        })
        
    } catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message)
    }
})

ProductRouter.get("/product/:category",async(req,res)=>{
    try {
        let{category}=req.params
        const product =await Product.find({ category: category })
        res.status(200).send({status:200 , message: 'Product Get', data : product})

    } catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message)  

    }
})
module.exports = ProductRouter