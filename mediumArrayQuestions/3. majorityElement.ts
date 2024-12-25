function majorityElement(nums: number[]) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) cnt++;
    }
    if (cnt > n / 2) return nums[i];
  }
}

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 3, 3, 1, 2, 2]));

function majorityElementBetterSolution(nums: number[]) {
  let n = nums.length;
  let maxValue = Math.floor(n / 2);
  let maxElementHashMap = new Map();

  for (let i = 0; i < n; i++) {
    if (maxElementHashMap.has(nums[i])) {
      maxElementHashMap.set(nums[i], maxElementHashMap.get(nums[i]) + 1);
    } else {
      maxElementHashMap.set(nums[i], 1);
    }
  }

  for (let [key, value] of maxElementHashMap) {
    if (value > maxValue) {
      return key;
    }
  }
}

// console.log(majorityElementBetterSolution([2, 2, 1, 1, 1, 2, 2]));

function majorityElementBestSolution(nums: number[]) {
  let cnt = 0;
  let ele = -1;

  for (let i = 0; i < nums.length; i++) {
    if (cnt === 0) {
      cnt = 1;
      ele = nums[i];
    } else if (nums[i] === ele) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let cnt1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ele) cnt1++;
  }

  if (cnt1 > Math.floor(nums.length / 2)) return ele;
  else return -1;
}
