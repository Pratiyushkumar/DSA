function longestOnes(nums: number[], k: number) {
  let maxlength = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let zeros = 0;
    for (let j = i; j < n; j++) {
      if (nums[j] === 0) zeros++;
      if (zeros > k) break;
      maxlength = Math.max(maxlength, j - i + 1);
    }
  }
  return maxlength;
}

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

function longestOnes2(nums: number[], k: number) {
  let l = 0,
    r = 0;
  let zeros = 0;
  let maxLen = 0;
  let n = nums.length;
  while (r < n) {
    if (nums[r] === 0) {
      zeros++;
    }

    if (zeros > k) {
      while (zeros > k) {
        if (nums[l] === 0) zeros--;
        l++;
      }
    }

    if (zeros <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    r++;
  }

  return maxLen;
}
