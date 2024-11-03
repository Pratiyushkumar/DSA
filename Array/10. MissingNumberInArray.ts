function missingNumber(nums: number[]): number {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }

  return -1;
}

function missingNumber2(nums: number[]): number {
  let n = nums.length;
  let hashedArray = new Array(n + 1).fill(-1);

  for (let i = 0; i < n; i++) {
    hashedArray[nums[i]]++;
  }

  for (let i = 0; i < hashedArray.length; i++) {
    if (hashedArray[i] === -1) {
      return i;
    }
  }
  return -1;
}

function missingNumber3(nums: number[]): number {
  let n = nums.length;

  let s1 = (n * (n + 1)) / 2;
  let s2 = 0;

  for (let i = 0; i < n; i++) {
    s2 += nums[i];
  }

  return s1 - s2;
}

// console.log(missingNumber2([0]));
// console.log(missingNumber3([3, 0, 1]));
// console.log(missingNumber([0, 1, 2, 4, 5]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber3([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber3([0, 1, 2, 3, 4]));
// console.log(missingNumber([1]));
// console.log(missingNumber([1, 2]));
