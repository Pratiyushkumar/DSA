function swapTwoNumbers(a: number, b: number): number[] {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}

console.log(swapTwoNumbers(2, 3));
