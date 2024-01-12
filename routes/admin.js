const express = require("express");
const  bcryptjs = require("bcryptjs");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const adminModel = require("../models/admin-model")
// const lawermodal = require("../models/petitioner-model")
// const verifytoken = require("../verify-token")
const router = express.Router();

router.post("/register",(req,res)=>{
    let admin = req.body;

    bcryptjs.genSalt(10,(err,salt)=>{
        if(err=== null || err=== undefined){
            bcryptjs.hash(admin.password,salt,(err,encp)=>{
                admin.password = encp;

                adminModel.create(admin)
                .then((doc)=>{
                    res.send({message:"admin Registered"})
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({message:"some problem in registration of the admin"})
                })
            })
        }
    }) 

  
})

router.post("/login",(req,res)=>{
    let admincred= req.body;
    // console.log(req.body)
    adminModel.findOne({username : admincred.username})
    .then((admin)=>{
        // console.log(admin)
        if(admin!== null || admin !== undefined){
            bcryptjs.compare(admincred.password,admin.password,(err,result)=>{
                if(err=== null || err === undefined){
                    if(result === true){
                        jwt.sign({username:admincred.username},"secretkey",(err,token)=>{
                            if(err===null||err===undefined){
                                res.send({success:true,token:token});
                            }
                        })
                
                    }
                    else{
                        res.send({message:"Invalid Password",success:false});
                    }
                }
            })
        }
        else{
            res.send({message:"Username not Found",success:false});
        }
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Invalid username"})
    })
})

router.post('/sendmail',(req,res)=>{
    // console.log("endpoint is called",req.body)
    let data  = req.body;
    let transport =nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"rewatkarranjeet123@gmail.com",
            // pass:'gsqy xokm vevr arip'
        }
    })
    let mailbody={
        from:"rewatkarranjeet123@gmail.com",
        to:"shravanjare@gmail.com",
        subject:"PreTrail Report",
        text:data.text
    }
    transport.sendMail(mailbody,(err,info)=>{
        if(!err){
            // console.log('email send successfully')
            res.send({message:'email send Successfull',success:true})
        }
        else{
            console.log(err)
            res.send({message:"some Problem in sending Email",success:false})
        }
    })
})
module.exports= router;

