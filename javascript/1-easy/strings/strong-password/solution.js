// Solution to the 'Strong Password' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let hasNumber = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  for (const ch of password) {
    if (numbers.includes(ch)) hasNumber = true;
    else if (lower_case.includes(ch)) hasLower = true;
    else if (upper_case.includes(ch)) hasUpper = true;
    else if (special_characters.includes(ch)) hasSpecial = true;
  }

  let missingTypes = 0;
  if (!hasNumber) missingTypes++;
  if (!hasLower) missingTypes++;
  if (!hasUpper) missingTypes++;
  if (!hasSpecial) missingTypes++;

  return Math.max(missingTypes, 6 - n);
}
