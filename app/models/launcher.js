const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create launcher schema

const LauncherSchema = new Schema({
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
    updaterUrl:{
      type: String,
      required: [true, "updater URL is required"]
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

const Launcher = mongoose.model('launcher', LauncherSchema);

module.exports = Launcher;