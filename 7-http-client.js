// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command - line argument.Write the String contents of each
// "data" event from the response to a new line on the console(stdout).

function getUrlFromCmdLine() {
  // gets URL from the command line.
  return process.argv[2] || "";
}

function getDataFromUrl(url, onDataCallback) {
  let { get: httpGet } = require("http");
  httpGet(url, response => {
    response.setEncoding("utf8");
    response.on("data", onDataCallback);
  });
}

function httpClient() {
  getDataFromUrl(getUrlFromCmdLine(), data => console.log(data));
}

httpClient();
