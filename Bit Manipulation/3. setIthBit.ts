function setIthBit(n: number, i: number) {
  return n | (1 << i);
}

console.log(setIthBit(9, 2));
console.log(setIthBit(13, 1));
