function findMaxConsecutiveOnes(nums: number[]) {
  let count = 0;
  let max_count = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }

    if (max_count < count) {
      max_count = count;
    }
  }

  return max_count;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
