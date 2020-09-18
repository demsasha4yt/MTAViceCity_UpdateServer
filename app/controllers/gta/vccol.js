const VcCol = require('../../models/gta/vccol');

exports.all = function (req, res, next) {
  VcCol.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  VcCol.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  VcCol.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  VcCol.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
  if (req.body.current === true){
    VcCol.find(function (err, launchers) {
      launchers.forEach(function (launcher) {
        console.log(launcher)
        if (launcher.current === true)
          VcCol.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
      });
    })
  }
  VcCol.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    VcCol.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  VcCol.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


