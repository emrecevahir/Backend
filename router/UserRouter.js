const express = require ("express")
const User = require("../models/UserModel")
const UserRouter = express.Router()
const jwt = require("jsonwebtoken")
const tokenControl = require("../middleware/auth")



UserRouter.post("/register",async(req,res)=>{
    try {
        let savedUser = await User.create(req.body)
        res.status(200).send({status : true , message :`${savedUser} created`})
    }
    catch (error) {
    res.status(404).send({status:false, message : error.message})
    console.log(error.message)
    }})

UserRouter.post("/login", async(req,res)=>{
    try {
        let {username,password} = req.body
        const enteredUser = await User.findOne({username})
        console.log(enteredUser)

        if(!username || !password || username === "" || password===""){
           return res.status(404).send({status : false , message :"Username and Password Required"})

        }
        if(!enteredUser){
            return res.status(404).send({status : false , message :"Username not found"})
        }


        if(password !== enteredUser.password){
           return res.status(404).send({status : false , message :`Username ${enteredUser.username} but Incorrect password`})
        }

        let access_token = jwt.sign({id:enteredUser._id, email:enteredUser.email, username:enteredUser.username},process.env.KEYFORJWT,{expiresIn:"1h"})
       console.log(access_token)
       console.log(process.env.KEYFORJWT)
        res.status(200).send({status : true , message :`${enteredUser.username} Login success`, user:enteredUser,access_token:access_token})
    }

    catch (error) 
    {
    res.status(404).send({status:false, message : error.message})
    console.log(error.message)
    }})

UserRouter.put("/resetPassword",async(req,res)=>{
        try {
            let {username,password} = req.body
            const {newPassword} =req.body
            const enteredUser = await User.findOne({username})
            
            
            console.log(enteredUser)
           
            if(password==enteredUser.password){
                
                const Password =await User.findOneAndUpdate({username},{password:newPassword})
                console.log(Password)
                res.send({
                    status : true,
                    data : Password,
                    message : "Password Updated"
                })
            }
    
            
        } catch (error) {
            res.status(404).send({status:false, message : error.message})
            console.log(error.message)
        
        }

        
    })

    UserRouter.get("/getAll",tokenControl,async(req,res)=>{
        try {
            let users = await User.find({})
            return res.status(200).send({status:true,message : "User List",users:users})
        } catch (error) {
            res.status(404).send({status:false, message : error.message})
         }
    })


module.exports = UserRouter

