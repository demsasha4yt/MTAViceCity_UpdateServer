exports.gta = function (data) {
  if (data.version && data.dataUrl && data.dataSize){
    return !(data.current && !data.available);
  }
  return false;
};

exports.launcher = function (launcher, change = false) {
  if (launcher.version && launcher.dataUrl && launcher.dataSize && launcher.updaterUrl){
    return !(launcher.current && !launcher.available);
  }
  return false;
};
