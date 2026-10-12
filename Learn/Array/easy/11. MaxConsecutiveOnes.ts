function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let count = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }

  return max;
}

console.log(findMaxConsecutiveOnes([0]));
// console.log(findMaxConsecutiveOnes([1, 0]));
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
