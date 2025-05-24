// hackker rank problem -> https://www.hackerrank.com/challenges/s10-quartiles/problem

function quartiles(arr) {
  // sort ascending
  arr.sort((a, b) => a - b);

  // helper to compute median of ANY array
  const median = (a) => {
    const m = a.length;
    const mid = Math.floor(m / 2);
    if (m % 2 === 1) return a[mid];
    else return (a[mid - 1] + a[mid]) / 2;
  };

  // compute Q2
  const Q2 = median(arr);

  // split into lower/upper halves
  const half = Math.floor(arr.length / 2);
  const lower = arr.slice(0, half);
  const upper = arr.length % 2 ? arr.slice(half + 1) : arr.slice(half);

  // compute Q1/Q3
  const Q1 = median(lower);
  const Q3 = median(upper);

  return [Q1, Q2, Q3];
}
