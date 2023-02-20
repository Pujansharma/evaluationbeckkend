const jwt=require("jsonwebtoken");
const autentication=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                next()
            }else{
                res.send({"mssg":"login first"})
            }
        })
    }else{
        res.send({"mssg":"login first"})
    }
}
module.exports={
    autentication
}