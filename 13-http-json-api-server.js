// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'.Expect the request to contain a query string
// with a key 'iso' and an ISO - format time as the value.

// For example:

// /api/parsetime ? iso = 2013 - 08 - 10T12: 10: 15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second'
// properties.For example:

// {
//     "hour": 14,
//         "minute": 23,
//             "second": 15
// }

// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds(the number of
//   milliseconds since 1 Jan 1970 00: 00: 00 UTC) under the property 'unixtime'.
// For example:

// { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to
// your program.

function getPortFromCmdLine() {
  // gets port number from the command line.
  return process.argv[2];
}

function parseTime(timeString) {
  let dateOb = new Date(timeString);
  return {
    hour: dateOb.getHours(),
    minute: dateOb.getMinutes(),
    second: dateOb.getSeconds()
  };
}

function getUnixTime(iso) {
  return { unixtime: Date.parse(iso) };
}

function httpJSONApiServer() {
  let { createServer } = require("http");
  let server = createServer((req, res) => {
    if (
      req.method === "GET" &&
      (req.url.startsWith("/api/unixtime") ||
        req.url.startsWith("/api/parsetime"))
    ) {
      let { parse } = require("url");
      let {
        query: { iso = "" }
      } = parse(req.url, true);
      res.writeHead(200, { "Content-Type": "application/json" });
      if (req.url.includes("unixtime")) {
        res.end(JSON.stringify(getUnixTime(iso)));
      } else {
        res.end(JSON.stringify(parseTime(iso)));
      }
    } else {
      res.writeHead(404, "not found");
    }
  });
  server.listen(getPortFromCmdLine());
}
httpJSONApiServer();
