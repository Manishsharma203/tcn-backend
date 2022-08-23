const mongoose = require("mongoose");

const { Schema } = mongoose;

const nameSchema = new Schema({
//   _id: {
    // type: Schema.Types.ObjectId,
    // required:true
//   },
  childName: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  meaning: {
    type: String,
    // required: true,
  },
  numerology: {
    type: String,
    // required: true,
  },
  lengthofletters: {
    type: Number,
    // required: true,
  },
  startingLetter: {
    type: String,
    // required: true,
  },
  syllables: {
    type: String,
    // required: true,
  },
  religion: {
    type: String,
    // required: true,
  },
  origin: {
    type: String,
    // required: true,
  },
  rashi: {
    type: String,
    // required: true,
  },
  similarNames: {
    type: [String],
    // required: true,
    default: undefined,
  },
  nakshatra: {
    type: String,
    // required: true,
  },
  viewCount: {
    type: Number,
  },
  status: {
    type: Boolean,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ChildName", nameSchema);
