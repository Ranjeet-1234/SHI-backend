const mongoose = require ("mongoose");

const adminschema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique : true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true})

const adminmodel = mongoose.model("admins",adminschema);

module.exports = adminmodel;