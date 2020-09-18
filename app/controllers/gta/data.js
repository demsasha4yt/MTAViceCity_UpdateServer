const Data = require('../../models/gta/data');

exports.all = function (req, res, next) {
  Data.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  Data.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  Data.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  Data.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
  if (req.body.current === true){
    Data.find(function (err, launchers) {
      launchers.forEach(function (launcher) {
        console.log(launcher)
        if (launcher.current === true)
          Data.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
      });
    })
  }
  Data.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    Data.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  Data.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


