function MaxSubArray(nums: number[], k: number) {
  let n = nums.length;
  let ans: number[] = [];

  for (let i = 0; i <= n - k; i++) {
    let windowSize: number[] = [];
    for (let j = 0; j < k; j++) {
      windowSize.push(nums[i + j]);
    }
    let max = Math.max(...windowSize);
    ans.push(max);
  }
  return ans;
}

// console.log(MaxSubArray([10, 5, 2, 7, 8, 7], 3));
// console.log(MaxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

function MaxSubArray2(nums: number[], k: number) {
  let ans: number[] = [];
  let n = nums.length;
  let windowSize: number[] = [];

  for (let i = 0; i < k; i++) {
    windowSize.push(nums[i]);
  }

  ans.push(Math.max(...windowSize));

  for (let i = k; i < n; i++) {
    windowSize.push(nums[i]);

    if (windowSize.length > k) {
      windowSize.shift()!;
    }

    ans.push(Math.max(...windowSize));
  }

  return ans;
}

// console.log(MaxSubArray2([10, 5, 2, 7, 8, 7], 3));
console.log(MaxSubArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
