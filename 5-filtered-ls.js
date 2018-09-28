// Create a program that prints a list of files in a given directory,
//     filtered by the extension of the files.You will be provided a directory
// name as the first argument to your program(e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.

function readDirAndFilter(dir, callback) {
  let { readdir } = require("fs");
  readdir(dir, callback);
}

function filterFiles(fileList, extension, keep = true) {
  return fileList.filter(fileName => keep && fileName.endsWith(extension));
}

function getDirAndExtFromCmdLine() {
  // gets dir path and extension to filter files, from the command line.
  return {
    path: process.argv[2] || ".",
    ext: process.argv[3] ? "." + process.argv[3] : ".js"
  };
}

function printList(list) {
  list.map(item => console.log(item));
}

function filteredLs() {
  let { path, ext } = getDirAndExtFromCmdLine();
  readDirAndFilter(path, function(err, fileList) {
    if (!err) {
      printList(filterFiles(fileList, ext));
    } else {
      console.error(err);
    }
  });
}

filteredLs();
