// Problem Link -> https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

// 30 Days Of Code
// Day 8 - Dictionaries And Maps

function processData(input) {
  const lines = input.split("\n").map((line) => line.trim()).filter(Boolean);
  const n = parseInt(lines[0], 10);
  const phoneMap = new Map();

  for (let i = 1; i <= n; i++) {
    const [name, phone] = lines[i].split(" ");
    phoneMap.set(name, phone);
  }

  const results = [];
  for (let i = n + 1; i < lines.length; i++) {
    const query = lines[i];
    if (phoneMap.has(query)) {
      results.push(`${query}=${phoneMap.get(query)}`);
    } else {
      results.push("Not found");
    }
  }

  console.log(results.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
