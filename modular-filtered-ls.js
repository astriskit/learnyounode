// part of 6-make-it-modular.js

function readDirAndFilter(dir, extension, callback) {
  let { readdir } = require("fs");
  readdir(dir, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, filterFiles(data, "." + extension));
    }
  });
}

function filterFiles(fileList, extension, keep = true) {
  return fileList.filter(fileName => keep && fileName.endsWith(extension));
}

module.exports = readDirAndFilter;
