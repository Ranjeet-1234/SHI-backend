
const jwt = require("jsonwebtoken")

//middleware for the verification of token
module.exports=function verifytoken(req,res,next){

    if(req.headers.authorization !== undefined){

        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token,"secretkey",(err,data)=>{
            if(err === null || err === undefined){
                next();
            }
            else{
                res.send({message:"Incorrect token please login again"})
            }
        })
    }
    else{
        res.send({message:"Autorization header is required"});
    }

}