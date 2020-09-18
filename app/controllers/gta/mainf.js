const MainF = require('../../models/gta/mainf');

exports.all = function (req, res, next) {
  MainF.find({}).then(function (launchers) {
    res.send(launchers);
  });
};

exports.id = function(req, res, next){
  MainF.findById({_id:req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};

exports.current = function (req, res, next) {
  MainF.findOne({current: true}).then(function (launcher) {
    res.send(launcher)
  });
};


exports.create = function (req, res, next) {
  MainF.create(req.body).then(function (launcher) {
    res.status(200).send(launcher)
  }).catch(next);
};

exports.put = function (req, res, next) {
  if (req.body.current === true){
    MainF.find(function (err, launchers) {
      launchers.forEach(function (launcher) {
        console.log(launcher)
        if (launcher.current === true)
          MainF.findByIdAndUpdate({_id: launcher._id}, {current: false}).then((response) => {})
      });
    })
  }
  MainF.findByIdAndUpdate(
    {_id: req.params.id}, req.body).then(function (launcher) {
    MainF.findOne({_id: req.params.id}).then(function (launcher) {
      res.send(launcher)
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  MainF.findByIdAndRemove({_id: req.params.id}).then(function (launcher) {
    res.send(launcher);
  });
};


