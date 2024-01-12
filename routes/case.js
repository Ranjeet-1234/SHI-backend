
const express = require("express");
const route = express.Router();
const caseModel = require("../models/case-model");


route.get('/', (req, res) => {
    caseModel.find()
        .then((cases) => {
            res.send({ success:true,cases:cases});
        })
        .catch((err) => {
            res.send({message:"some Problem in fetching data",success:false});
        })
})
route.get('/:id', (req, res) => {
    let id = req.params.id
    caseModel.findById(id)
        .then((cases) => {
            res.send({ success:true,doc:cases});
        })
        .catch((err) => {
            res.send({message:"some Problem in fetching data",success:false});
        })
})

route.post('/', (req, res) => {
    caseModel.create(req.body)
        .then(() => {
            res.send({message:"case created successfully",success:true});
        })
        .catch(() => {
            res.send({message:"some error in creating case",success:true});
        })
})

module.exports= route;