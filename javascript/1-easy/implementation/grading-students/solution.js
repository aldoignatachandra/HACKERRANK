// Solution to the 'Grading Students' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let checker = Math.round(grade / 5) * 5;

    if (grade < 38) {
      result.push(grade);
    } else if (checker > grade && checker - grade < 3) {
      result.push(checker);
    } else {
      result.push(grade);
    }
  }

  return result;
}
