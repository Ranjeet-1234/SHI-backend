const mongoose = require("mongoose");

// schema for lawer collection
const petitionerSchema = mongoose.Schema({
    pet_name: {
        type: String,
        require: true,
    },
    adv_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    bar_reg: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    mob_no: {
        type: Number,
        require: true,
        minlength: 10,
        maxLength: 10,
    },
    dist: {
        type: String,
        require: true,
    },
    village:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    police_sta:{
        type:String,
        require:true
    },
    police_sta_code:{
        type:Number,
        require:true
    },
    UID_no:{
        type:Number,
        require:true
    },
    case_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cases"
    }
}, { timestamps: true })

const petitionerrmodal = mongoose.model("petitioners", petitionerSchema);

module.exports = petitionerrmodal;
