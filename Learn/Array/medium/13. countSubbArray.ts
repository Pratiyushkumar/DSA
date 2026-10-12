function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

// console.log(subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));

function subarraySumBetterSolution(nums: number[], k: number): number {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
}

// console.log(subarraySumBetterSolution([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));

function subarraySumOptimalSolution(nums: number[], k: number) {
  let n = nums.length;
  let map = new Map();
  let count = 0;
  let prefixSum = 0;

  map.set(0, 1);

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];

    let remove = prefixSum - k;

    if (map.has(remove)) {
      count += map.get(remove);
    }

    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }

  return count;
}

console.log(subarraySumOptimalSolution([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3));
