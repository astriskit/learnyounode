// Write a program that accepts one or more numbers as command - line arguments
// and prints the sum of those numbers to the console(stdout).

function sum(a, b) {
  return Number(a) + Number(b);
}

function getNumbersFromCmdLine() {
  let cmdLineArray = process.argv; //from hint: process.argv is an array containing the complete command-line
  return cmdLineArray.slice(2); // first two are executer and the program.
}

function sumCmdLine() {
  return getNumbersFromCmdLine().reduce(sum, 0);
}

console.log(sumCmdLine());
