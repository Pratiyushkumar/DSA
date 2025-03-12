function RemoveLastSetBit(N: number) {
  return N & (N - 1);
}

console.log(RemoveLastSetBit(13));
console.log(RemoveLastSetBit(40));
