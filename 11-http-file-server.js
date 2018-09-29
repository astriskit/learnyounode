// Write an HTTP server that serves the same text file for each request it
//   receives.

// Your server should listen on the port provided by the first argument to
// your program.

// You will be provided with the location of the file to serve as the second
// command - line argument.You must use the fs.createReadStream() method to
// stream the file contents to the response.

function getPathAndPortFromCmdLine() {
  // gets port number & file path from the command line.
  return { path: process.argv[3], port: process.argv[2] };
}

function getFileStream(filePath) {
  let { createReadStream } = require("fs");
  return createReadStream(filePath);
}

function hostFile(path, port) {
  let { createServer } = require("http");
  let server = createServer((request, response) => {
    let fileStream = getFileStream(path);
    fileStream.pipe(response);
  });
  server.listen(port);
}

function httpFileServer() {
  let { path, port } = getPathAndPortFromCmdLine();
  hostFile(path, port);
}

httpFileServer();
