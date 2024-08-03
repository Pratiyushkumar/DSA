function fibonnaciIteratively(num: number): string {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.join(' ');
}

// console.log(fibonnaciIteratively(5));

function fibonacciRecursive(num: number): number {
  if (num <= 1) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
console.log(fibonacciRecursive(5));
