// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines(\n) it contains to the
// console(stdout), similar to running cat file | wc - l.

function getFileContents(filePath, encoding = "utf8") {
  let { readFileSync } = require("fs");
  return readFileSync(filePath, encoding);
}

function countLines(text) {
  return text.split("\n").length;
}

function getFilePathFromCmdLine() {
  // gets filename from the command line.
  return process.argv[2] || undefined;
}

function getCountOfFile() {
  return countLines(getFileContents(getFilePathFromCmdLine()));
}

let lines = getCountOfFile();
lines -= 1; // fix as hinted. B'coz the test file has no "\n" at the last line.

console.log(lines);
