"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine().trim(), 10);

  // Array to store names of people with gmail accounts
  const gmailUsers = [];

  // Regular expression to match gmail.com email addresses
  const gmailRegex = /@gmail\.com$/;

  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const firstName = firstMultipleInput[0];
    const emailID = firstMultipleInput[1];

    // Check if the email is a gmail account
    if (gmailRegex.test(emailID)) {
      gmailUsers.push(firstName);
    }
  }

  if (gmailUsers.length > 0) {
    // Sort names alphabetically
    gmailUsers.sort();

    // Print each name on a new line
    gmailUsers.forEach((name) => {
      console.log(name);
    });
  }
}
