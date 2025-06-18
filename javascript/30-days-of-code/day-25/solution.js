function processData(input) {
  const lines = input.trim().split("\n");
  const t = parseInt(lines[0]);

  for (let i = 1; i <= t; i++) {
    const n = parseInt(lines[i]);
    console.log(isPrime(n) ? "Prime" : "Not prime");
  }
}

function isPrime(n) {
  // Handle edge cases
  if (n <= 1) return false; // 1 is not prime
  if (n <= 3) return true; // 2 and 3 are prime
  if (n % 2 === 0 || n % 3 === 0) return false; // Quickly check divisibility by 2 or 3

  // Check divisibility using 6k±1 optimization
  // Only need to check up to square root of n
  const sqrtN = Math.sqrt(n);

  // Start at 5 (first prime after 3) and check every 6k±1 number
  // This skips all multiples of 2 and 3
  for (let i = 5; i <= sqrtN; i += 6) {
    // Check if n is divisible by i or i+2
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
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
