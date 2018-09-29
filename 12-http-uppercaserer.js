// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper -case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

function getPortFromCmdLine() {
  // gets port number from the command line.
  return process.argv[2];
}

function upperCase(targetString) {
  return targetString.toUpperCase();
}

function httpUpperCaserer() {
  let { createServer } = require("http");
  let server = createServer(function(req, response) {
    console.log("req", req);
    if (req.method === "POST") {
      console.log("Method is post");
      response.end("success request");
    } else {
      response.writeHead(404, "No route found!");
      response.end();
    }
  });
  server.listen(getPortFromCmdLine());
}

httpUpperCaserer();
