// Solution to the 'Sherlock And The Valid String' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/sherlock-and-the-valid-string/problem

function isValid(s) {
  const charCount = {};
  const freqCount = {};

  // Count frequency of each character
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count frequency of frequencies
  for (const count of Object.values(charCount)) {
    freqCount[count] = (freqCount[count] || 0) + 1;
  }

  const freqKeys = Object.keys(freqCount).map(Number);

  // If there's only one frequency, it's valid
  if (freqKeys.length === 1) return "YES";

  // If there are two frequencies, check the conditions
  if (freqKeys.length === 2) {
    const [f1, f2] = freqKeys.sort((a, b) => a - b);
    const count1 = freqCount[f1];
    const count2 = freqCount[f2];

    // Check if we can remove one character to make it valid
    if (
      (count1 === 1 && (f1 === 1 || f1 - f2 === 1)) ||
      (count2 === 1 && f2 - f1 === 1)
    ) {
      return "YES";
    }
  }

  return "NO";
}
