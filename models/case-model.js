const mongoose = require("mongoose");
// const { stringify } = require("querystring");

const caseSchema = mongoose.Schema({
   cases: {
      type: String,
      require: true
   },
   case_regestration: {
      type: String,
      require: true
   },
   age: {
      type: String,
      require: true
   },
   expected_lifespan: {
      type: String,
      require: true
   },
   winning_probability: {
      type: String,
      require: true
   }
}, { timestamps: true })

const caseModel = mongoose.model("cases", caseSchema);

module.exports = caseModel;