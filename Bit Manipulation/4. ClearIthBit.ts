function ClearIthBit(n: number, i: number) {
  return n & ~(i << i);
}

console.log(ClearIthBit(13, 2));
console.log(ClearIthBit(9, 3));
