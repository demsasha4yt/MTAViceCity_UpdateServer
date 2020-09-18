const Mta = require('../../models/gta/mta');

exports.all = function (req, res, next) {
  Mta.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  Mta.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  Mta.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  Mta.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
  if (req.body.current === true){
    Mta.find(function (err, launchers) {
      launchers.forEach(function (launcher) {
        console.log(launcher)
        if (launcher.current === true)
          Mta.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
      });
    })
  }
  Mta.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    Mta.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  Mta.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


