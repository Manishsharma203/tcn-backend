const mongoose = require("mongoose");

const { Schema } = mongoose;

const filtersListSchema = new Schema({
  gender: {
    type: [String],
    required: true,
  },
  rashi: {
    type: [String],
    required: true,
  },
  religion:{
    type: [String],
    required: true,
  },
  nakshatra:{
    type: [String],
    required: true,
  },
  origin: {
    type: [String]
  }
});

module.exports = mongoose.model("filtersList", filtersListSchema);
