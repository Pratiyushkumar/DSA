function singleNumberOptimizedSolution(nums: number[]): number[] {
  let xorr = 0;
  for (let i = 0; i < nums.length; i++) {
    xorr = xorr ^ nums[i];
  }

  let rightmost = (xorr & (xorr - 1)) ^ xorr;
  let b1 = 0;
  let b2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & rightmost) {
      b1 = b1 ^ nums[i];
    } else {
      b2 = b2 ^ nums[i];
    }
  }

  return [b1, b2];
}

console.log(singleNumberOptimizedSolution([2, 4, 2, 14, 3, 7, 7, 3, 8, 8]));
