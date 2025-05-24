// Solution to the 'Marcs Cakewalk' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/marcs-cakewalk/problem

function marcsCakewalk(calorie) {
  calorie.sort((a, b) => b - a);
  let miles = 0;

  for (let i = 0; i < calorie.length; i++) {
    const walk = 2 ** i * calorie[i];
    miles += walk;
  }

  return miles;
}
