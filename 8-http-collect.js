// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command - line argument.Collect all data from the server(not
//   just the first "data" event) and then write two lines to the console
//     (stdout).

// The first line you write should just be an integer representing the number
// of characters received from the server.The second line should contain the
// complete String of characters sent by the server

function getUrlFromCmdLine() {
  // gets URL from the command line.
  return process.argv[2] || "";
}

function getDataFromUrl(url, onDataFinished) {
  let { get: httpGet } = require("http");
  httpGet(url, response => {
    response.setEncoding("utf8");
    let urlContent = "";
    response.on("data", data => (urlContent += data));
    response.on("end", () => onDataFinished(urlContent));
  });
}

function printData(content) {
  console.log(content.length);
  console.log(content);
}

function httpCollect() {
  getDataFromUrl(getUrlFromCmdLine(), printData);
}

httpCollect();
