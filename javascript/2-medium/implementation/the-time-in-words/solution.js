// Solution to the 'The Time In Words' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/the-time-in-words/problem

function timeInWords(h, m) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  // For numbers from 21 to 29, we build their word representation.
  const joinTwenty = (num) => {
    return "twenty " + numbers[num - 20];
  };

  // Returns the word for any minute value in our range.
  const getWord = (num) => {
    if (num <= 20) return numbers[num];
    else return joinTwenty(num);
  };

  if (m === 0) {
    return `${numbers[h]} o' clock`;
  } else if (m === 1) {
    return `one minute past ${numbers[h]}`;
  } else if (m === 15) {
    return `quarter past ${numbers[h]}`;
  } else if (m === 30) {
    return `half past ${numbers[h]}`;
  } else if (m === 45) {
    return `quarter to ${numbers[(h % 12) + 1]}`;
  } else if (m < 30) {
    return `${getWord(m)} minutes past ${numbers[h]}`;
  } else {
    const remaining = 60 - m;
    return `${getWord(remaining)} minutes to ${numbers[(h % 12) + 1]}`;
  }
}
