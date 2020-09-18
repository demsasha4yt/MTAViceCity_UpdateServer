const VcDff = require('../../models/gta/vcdff');

exports.all = function (req, res, next) {
  VcDff.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  VcDff.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  VcDff.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  VcDff.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
  if (req.body.current === true){
    VcDff.find(function (err, launchers) {
      launchers.forEach(function (launcher) {
        console.log(launcher)
        if (launcher.current === true)
          VcDff.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
      });
    })
  }
  VcDff.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    VcDff.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  VcDff.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


