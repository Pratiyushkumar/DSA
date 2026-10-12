function ToggleIthBit(n: number, i: number) {
  return n ^ (1 << i);
}

console.log(ToggleIthBit(13, 2));
console.log(ToggleIthBit(13, 1));
