function isEven(n: number) {
  console.log(n & (n - 1));
  return (n & 1) === 0;
}

console.log(isEven(15));
console.log(isEven(44));
