// Solution to the 'Encryption' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  // Remove spaces and convert to lowercase
  const cleaned = s.replace(/\s+/g, "").toLowerCase();

  // Calculate the length of the cleaned string
  const len = cleaned.length;

  // Calculate the number of rows and columns
  let cols = Math.ceil(Math.sqrt(len));
  let rows = Math.floor(Math.sqrt(len));

  // If rows * cols < len, we need one more row
  if (rows * cols < len) rows += 1;

  // Create an array to hold the encrypted words
  const encryptedWords = [];

  // Loop through each column
  for (let c = 0; c < cols; c++) {
    let word = "";

    // Loop through each row
    for (let r = 0; r < rows; r++) {
      const index = r * cols + c;
      if (index < len) word += cleaned[index];
    }

    encryptedWords.push(word);
  }

  // Join the encrypted words with spaces and return
  return encryptedWords.join(" ");
}
