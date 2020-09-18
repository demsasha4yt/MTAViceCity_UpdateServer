const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ENB Schema

const EnbSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  description: {
    type: String,
    required: [true, "description field is required"]
  },
  version: {
    type: String,
    required: [true, "version field is required"]
  },
  url: {
    type: String,
    required: [true, 'url field is required']
  },
  available: {
    type: String,
    required: [true, 'available field id required']
  }
});

const Enb = mongoose.model('enb', EnbSchema);

module.exports = Enb;
