// This problem is the same as the previous problem(HTTP COLLECT) in that
// you need to use http.get().However, this time you will be provided with
//   three URLs as the first three command - line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console(stdout).You don't need to print out the
// length, just the data as a String; one line per URL.The catch is that you
// must print them out in the same order as the URLs are provided to you as
//     command - line arguments.

function getUrlsFromCmdLine() {
  // gets URL from the command line.
  return process.argv.slice(2);
}

function getDataFromUrls(urls, onFinished) {
  let { get: httpGet } = require("http");
  let contents = [...urls],
    finishCounter = 0;
  urls.forEach((url, index) => {
    httpGet(url, response => {
      response.setEncoding("utf8");
      let urlContent = "";
      response.on("data", data => {
        urlContent += data;
      });
      response.on("end", () => {
        finishCounter += 1;
        contents[index] = urlContent;
        if (finishCounter === urls.length) {
          onFinished(contents);
        }
      });
    });
  });
}

function printData(contents) {
  contents.forEach(content => {
    console.log(content);
  });
}

function jugglingAsync() {
  let urlList = getUrlsFromCmdLine();
  getDataFromUrls(urlList, printData);
}

jugglingAsync();
