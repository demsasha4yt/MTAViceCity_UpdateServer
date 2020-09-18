const Audio = require('../../models/gta/audio');
const Anim = require('../../models/gta/anim');
const Data = require('../../models/gta/data');
const Models = require('../../models/gta/models');
const Mta = require('../../models/gta/mta');
const Text = require('../../models/gta/text');
const Gta3 = require('../../models/gta/gta3');
const GtaInt = require('../../models/gta/gtaint');
const Player = require('../../models/gta/player');
const VcDff = require('../../models/gta/vcdff');
const VcCol = require('../../models/gta/vccol');
const VcTxd = require('../../models/gta/vctxd');
const MainF = require('../../models/gta/mainf');


exports.currents = function (req, res, next) {
  Audio.findOne({current: true}).then(function (data) {
    this.audioInfo = data;
  });

  Anim.findOne({current: true}).then(function (data) {
    this.animInfo = data;
  });

  Data.findOne({current: true}).then(function (data) {
    this.dataInfo = data;
  });

  Models.findOne({current: true}).then(function (data) {
    this.modelsInfo = data;
  });

  Mta.findOne({current: true}).then(function (data) {
    this.mtaInfo = data;
  });

  Text.findOne({current: true}).then(function (data) {
    this.textInfo = data;
  });

  Gta3.findOne({current: true}).then(function (data) {
    this.gta3Info = data;
  });

  GtaInt.findOne({current: true}).then(function (data) {
    this.gtaIntInfo = data;
  });

  VcCol.findOne({current: true}).then(function (data) {
    this.vcColInfo = data;
  });

  VcDff.findOne({current: true}).then(function (data) {
    this.vcDffInfo = data;
  });

  VcTxd.findOne({current: true}).then(function (data) {
    this.vcTxdInfo = data;
  });

  Player.findOne({current: true}).then(function (data) {
    this.playerInfo = data;
  });

  MainF.findOne({current: true}).then(function (data) {
    this.mainFInfo = data;
  });
  res.send({
    mainf:{
      folder: false,
      path: './',
      info: this.mainFInfo
    },
    audio: {
      folder: true,
      path: './',
      info: this.audioInfo
    },
    anim: {
      folder: true,
      path: './',
      info: this.animInfo
    },
    data: {
      folder: true,
      path: './',
      info: this.dataInfo
    },
    models: {
      folder: true,
      path: './',
      info: this.modelsInfo
    },
    mta: {
      folder: true,
      path: './',
      info: this.mtaInfo
    },
    text: {
      folder: true,
      path: './',
      info: this.textInfo
    },
    gta3: {
      folder: true,
      path: './models',
      info: this.gta3Info
    },
    gtaint: {
      folder: true,
      path: './models',
      info: this.gtaIntInfo
    },
    vcdff: {
      folder: true,
      path: './models',
      info: this.vcDffInfo
    },
    vctxd: {
      folder: true,
      path: './models',
      info: this.vcTxdInfo
    },
    vccol: {
      folder: true,
      path: './models',
      info: this.vcColInfo
    },
    player: {
      folder: true,
      path: './models',
      info: this.playerInfo
    }

  });

};
