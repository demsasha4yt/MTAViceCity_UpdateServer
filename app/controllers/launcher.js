const Launcher = require('../models/launcher');

exports.all = function (req, res, next) {
  Launcher.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  Launcher.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  Launcher.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  Launcher.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
    if (req.body.current === true){
      Launcher.find(function (err, launchers) {
        launchers.forEach(function (launcher) {
          console.log(launcher)
          if (launcher.current === true)
            Launcher.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
        });
      })
    }
    Launcher.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    Launcher.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  Launcher.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


