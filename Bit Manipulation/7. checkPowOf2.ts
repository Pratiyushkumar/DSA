function isPowerOfTwo(n: number) {
  console.log(n);
  console.log(n - 1);
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(0));
