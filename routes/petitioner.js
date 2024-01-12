const express = require("express");
const petitionermodal = require("../models/petitioner-model")
const verifytoken = require("../verify-token")
const route = express.Router();

// api endpoints for creating a lawer 

route.post("/", (req, res) => {
    petitionermodal.create(req.body)
        .then((doc) => {
            res.send({ message: "petitioner created succefully",success:true });
        })
        .catch((err) => {
            console.log(err);
            res.send({ message: "some Problem in creating petitioner",success:false });
        })
})

//api endpoint for getting the data
route.get("/", (req, res) => {
    petitionermodal.find()
    .then((petitioners) => {
        res.send(petitioners);
    })
    .catch((err) => {
        res.send({ message: "some Problem in creating petitioner",success:false });
    })
})

//api endpoint for getting the single lawer 
route.get("/:id", (req, res) => {
    let caseid = req.params.id;
    petitionermodal.findOne({ case_id: caseid })
        .then((petittioner) => {
            res.send(petittioner);
        })
        .catch((err) => {
            console.log("some problem in fetching lawers");
            res.send({ message: "some Problem in finding petitioner",success:false });
        })

})

module.exports = route;