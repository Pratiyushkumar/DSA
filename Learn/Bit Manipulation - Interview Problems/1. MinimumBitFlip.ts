function minBitFlips(start: number, goal: number) {
  let ans = start ^ goal;
  let count = 0;
  for (let i = 0; i < 31; i++) {
    if (ans & (1 << i)) {
      count++;
    }
  }

  return count;
}
console.log(minBitFlips(10, 7));
console.log(minBitFlips(3, 4));
console.log(minBitFlips(2, 1));
