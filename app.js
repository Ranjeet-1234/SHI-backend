const express = require("express");
const cors = require ('cors');
const mongoose = require("mongoose");
const process = require("process");
const petitionerroute = require("./routes/petitioner.js")
const adminsroute = require("./routes/admin.js")
const caseroute = require("./routes/case.js")
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

//mongo server connection
mongoose.connect("mongodb+srv://SIH:Hack4Justice@cluster0.4uca8vz.mongodb.net/Court")
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log("some problem in connecting with server",err);
})


app.use("/petitioner",petitionerroute);
app.use("/admin",adminsroute);
app.use("/case",caseroute);

//starting up the server
app.listen(8000,()=>{
    console.log("server is up and running "+ PORT );
})



// {
//     "name":"ranjeet",
//     "education":"walchand",
//     "experince": 20,
//     "type_of_lawer":"crimal",
//     "location": "sangli",
//     "rating":3.4,
//     "about_yourself":"I am student of walchand college of engineening "
//   }



// {
//     "name":"Ranjeet",
//     "username":"roger",
//     "gmail":"roger@gmail.com",
//     "password":"Droger",
//     "contact":1234567890,
//     "city":"sangli"
//   }