function divide(dividend: number, divisor: number) {
  let sum = 0;
  let count = 0;

  while (sum + divisor <= dividend) {
    count++;
    sum += divisor;
  }

  return count;
}

// console.log(divide(7, -3));

function divideOptimal(dividend: number, divisor: number) {
  let sign = true; //true means +ve number

  if (dividend === divisor) return 1;
  if (dividend < 0 && divisor > 0) sign = false; //false means -ve number
  else if (dividend > 0 && divisor < 0) sign = false; //false means -ve number

  let n = Math.abs(dividend);
  let d = Math.abs(divisor);
  let ans = 0;

  while (n >= d) {
    let count = 0;

    while (n >= d << (count + 1) && d << (count + 1) > 0) {
      count++;
    }
    ans += 1 << count;
    n -= d << count;
  }

  ans = sign ? ans : -ans;

  return Math.min(Math.max(-(2 ** 31), ans), 2 ** 31 - 1);
}
// console.log(divideOptimal(7, -3));
console.log(divideOptimal(-2147483648, -1));
