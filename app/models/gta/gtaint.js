const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GtaIntSchema = new Schema({
  version: {
    type: String,
    required: [true, "Version field is required"]
  },
  dataUrl: {
    type: String,
    required: [true, "Download URL is required"]
  },
  dataSize:{
    type: String,
    required: [true, "dataSize is required"]
  },
  current:{
    type: Boolean,
    default: false
  },
  available:{
    type: Boolean,
    default: false
  }
});

const GtaInt = mongoose.model('gtaint', GtaIntSchema);

module.exports = GtaInt;
