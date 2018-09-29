// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper -case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

function getPortFromCmdLine() {
  // gets port number from the command line.
  return process.argv[2];
}

function httpUpperCaserer() {
  let { createServer } = require("http");
  let { Transform } = require("stream");
  let transformToUpperCase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    }
  });
  let server = createServer(function(req, response) {
    if (req.method === "POST") {
      req.pipe(transformToUpperCase).pipe(response);
    } else {
      response.writeHead(404);
      response.end();
    }
  });
  server.listen(getPortFromCmdLine());
}

httpUpperCaserer();
