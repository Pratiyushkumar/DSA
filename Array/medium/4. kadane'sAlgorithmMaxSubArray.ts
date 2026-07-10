function maxSubArray(nums: number[]) {
  let maxSum = 0;
  let n = nums.length;

  if (n === 1) return nums[0];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5, -1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));
// console.log(maxSubArray([-2, 1]));

function maxSubArrayOptimalApproach(nums: number[]) {
  let maxSum = nums[0];
  let sum = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

// console.log(maxSubArrayOptimalApproach([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrayOptimalApproach([1]));
