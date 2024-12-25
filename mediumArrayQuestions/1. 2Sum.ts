function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// console.log(twoSum([2, 7, 11, 15], 9));

function twoSumBetter(nums: number[], target: number) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(nums[i], i);
  }
  return [-1, -1];
}

console.log(twoSumBetter([2, 7, 11, 15], 9));
console.log(twoSumBetter([3, 2, 4], 6));
