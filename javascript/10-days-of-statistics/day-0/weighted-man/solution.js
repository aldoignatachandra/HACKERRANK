// hackker rank problem -> https://www.hackerrank.com/challenges/s10-weighted-mean/problem

function processData(input) {
  input = input.split("\n");

  let l = parseInt(input[0]);
  let x = input[1].split(" ").map(Number);
  let w = input[2].split(" ").map(Number);
  let mxw = 0;
  let sw = 0;
  let wm = 0;

  for (let i = l - 1; i >= 0; i--) {
    mxw += x[i] * w[i];
    sw += w[i];
  }

  wm = (mxw / sw).toFixed(1);

  console.log(wm);
}
