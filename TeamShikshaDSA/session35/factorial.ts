function factorialOfNumber(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * factorialOfNumber(n - 1);
}

console.log(factorialOfNumber(5));
