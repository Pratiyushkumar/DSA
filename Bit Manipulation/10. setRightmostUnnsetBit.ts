function setBit(n: number) {
  return n | (n + 1);
}

console.log(setBit(15));
console.log(setBit(6));
