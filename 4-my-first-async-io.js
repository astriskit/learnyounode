// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
//     (stdout), similar to running cat file | wc - l.

function getFileContents(filePath, callback, encoding = "utf8") {
  let { readFile } = require("fs");
  return readFile(filePath, encoding, callback);
}

function countLines(text) {
  return text.split("\n").length;
}

function getFilePathFromCmdLine() {
  // gets filename from the command line.
  return process.argv[2] || undefined;
}

function getLinesCountOfFile() {
  getFileContents(getFilePathFromCmdLine(), function(err, data) {
    if (!err) {
      let lines = countLines(data);
      lines -= 1; // fix as hinted. B'coz the test file has no "\n" at the last line.
      console.log(lines);
    } else {
      console.error(err);
    }
  });
}

getLinesCountOfFile();
