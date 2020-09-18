const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VcTxdSchema = new Schema({
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

const VcTxd = mongoose.model('vctxd', VcTxdSchema);

module.exports = VcTxd;
