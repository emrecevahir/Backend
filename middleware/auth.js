const jwt = require("jsonwebtoken")

const tokenControl = (req,res,next)=>{

    let token = req.headers.authorization
    if(!token)
     {
     return res.status(401).json({status:false,message : 'Unauthorized'})
    }

    jwt.verify(token,process.env.KEYFORJWT,(error,data)=>{
        if(error) return res.status(404).json({status:false,message:'Token is invalid'})
        req.data = data
        next()
    })
}

module.exports = tokenControl