function myPow(x: number, n: number) {
  let ans = 1;
  let m = Math.abs(n);
  while (m > 0) {
    if (m % 2 === 1) {
      ans = ans * x;
      m = m - 1;
    } else {
      m = m / 2;
      x = x * x;
    }
  }
  return n < 0 ? 1 / ans : ans;
}

// console.log(myPow(2, 10));
// console.log(myPow(3, 9));
console.log(myPow(2.0, -2));
