// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the
// first argument to your program.For each connection you must write the
// current date & 24 hour time in the format:

// "YYYY-MM-DD hh:mm"

// followed by a newline character.Month, day, hour and minute must be
// zero - filled to 2 integers.For example:

// "2013-07-06 17:42"

// After sending the string, close the connection.

function getPortFromCmdLine() {
  // gets port number from the command line.
  return process.argv[2];
}

function padStartWithZero(length) {
  return targetString => targetString.toString().padStart(length, "0");
}

function getCurrentDate() {
  let now = new Date();
  let padStartTill2 = padStartWithZero(2);
  return `${now.getFullYear()}-${padStartTill2(
    now.getMonth() + 1
  )}-${padStartTill2(now.getDate())} ${padStartTill2(
    now.getHours()
  )}:${padStartTill2(now.getMinutes())}\n`; //newline ending!
}

function onNewConnection(socket) {
  socket.end(getCurrentDate());
}

function timeServer() {
  let { createServer } = require("net");
  let server = createServer(onNewConnection);
  server.listen(getPortFromCmdLine());
}

timeServer();
