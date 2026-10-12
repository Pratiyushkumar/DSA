function singleNumber(nums: number[]) {
  let hashMap = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    hashMap.set(nums[i], hashMap.get(nums[i]) + 1 || 1);
  }

  let ans = [];

  for (let [keys, value] of hashMap) {
    if (value === 1) {
      //   ans.push(keys);
    }
  }

  return ans;
}

// console.log(singleNumber([1, 2, 1, 3, 2, 5]));

function singleNumberBetter(nums: number[]): number[] {
  // Find the two unique numbers using a Set
  const set = new Set<number>();
  for (const x of nums) {
    if (set.has(x)) set.delete(x);
    else set.add(x);
  }

  // Convert Set back to array with explicit typing
  const ans: number[] = [...set];
  return ans;
}

// console.log(singleNumberBetter([1, 2, 1, 3, 2, 5]));

