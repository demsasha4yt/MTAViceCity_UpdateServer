const Enb = require('../models/enb');

exports.all = function (req, res, next) {
  Enb.find({}).then(function (enbs) {
    res.send(enbs);
  })
};

exports.id = function (req, res, next) {
  Enb.findById({_id:req.params.id}).then(function (enb) {
    res.send(enb);
  });
};

exports.create = function (req, res, next) {
  Enb.create(req.body).then(function (enb) {
    res.status(200).send(enb)
  }).catch(next);
};

exports.put = function (req, res, next) {
  Enb.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (enb) {
    Enb.findOne({_id: req.params.id}).then(function (enb) {
      res.send(enb)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  Enb.findByIdAndRemove({_id: req.params.id}).then(function (enb) {
    res.send(enb);
  });
};
