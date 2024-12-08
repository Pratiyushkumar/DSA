function singleNumber(nums: number[]): number {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let cnt = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        cnt++;
      }
    }

    if (cnt === 1) {
      return nums[i];
    }
  }
  return -1;
}

function singleNumber2(nums: number[]): number {
  let n = nums.length;
  let max = Math.max(...nums);
  let hashedArray = new Array(max + 1).fill(0);

  for (let i = 0; i < n; i++) {
    hashedArray[nums[i]]++;
  }

  for (let i = 0; i < n; i++) {
    if (hashedArray[nums[i]] === 1) {
      return nums[i];
    }
  }

  return -1;
}

function singleNumber3(nums: number[]): number {
  let n = nums.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
}

function singleNumber4(nums: number[]): number {
  let n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(singleNumber4([-1, -1, -2]));
// console.log(singleNumber3([2, 2, 1]));
// console.log(singleNumber2([4, 2, 1, 2, 1]));
