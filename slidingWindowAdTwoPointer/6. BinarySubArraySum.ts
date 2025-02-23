function numSubarraysWithSum(nums: number[], goal: number) {
  let count = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === goal) {
        count++;
      }
    }
  }
  return count;
}

// console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
// console.log(numSubarraysWithSum([1, 0, 0, 1, 1, 0], 2));
// console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 1));

function numSubarraysWithSumOptimal(nums: number[], goal: number) {
  let ans = atmost(nums, goal) - atmost(nums, goal - 1);
  return ans;
}
function atmost(nums: number[], goal: number): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let count = 0;
  let n = nums.length;

  if (goal < 0) return 0;

  while (right < n) {
    sum += nums[right];
    while (sum > goal) {
      sum -= nums[left];
      left++;
    }
    count += right - left + 1;
    right++;
  }

  return count;
}

console.log(numSubarraysWithSumOptimal([1, 0, 0, 1, 1, 0], 2));
