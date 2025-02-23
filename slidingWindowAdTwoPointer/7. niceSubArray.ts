function numberOfSubarrays(nums: number[], k: number) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let oddCount = 0;
    for (let j = i; j < n; j++) {
      if (nums[j] % 2 !== 0) oddCount++;
      if (oddCount === k) count++;
    }
  }

  return count;
}

// console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));

function numberOfSubarraysOptimal(nums: number[], k: number) {
  return (
    numberOfSubarraysAtmost(nums, k) - numberOfSubarraysAtmost(nums, k - 1)
  );
}

function numberOfSubarraysAtmost(nums: number[], k: number) {
  let count = 0;
  let oddCount = 0;
  let n = nums.length;
  let l = 0;
  let r = 0;

  while (r < n) {
    oddCount += nums[r] % 2;
    while (oddCount > k) {
      oddCount -= nums[l] % 2;
      l++;
    }
    count += r - l + 1;
    r++;
  }

  return count;
}

console.log(numberOfSubarraysOptimal([1, 1, 2, 1, 1], 3));
