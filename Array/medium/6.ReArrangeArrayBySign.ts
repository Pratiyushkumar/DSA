function rearrangeArray(nums: number[]) {
  let posArr: number[] = []; //length will be n/2
  let negArr: number[] = []; //length will be n/2
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negArr.push(nums[i]);
    } else {
      posArr.push(nums[i]);
    }
  }

  for (let i = 0; i < n / 2; i++) {
    nums[2 * i] = posArr[i];
    nums[2 * i + 1] = negArr[i];
  }
  return nums;
}

// console.log(rearrangeArray([1, -1, 2, -2, 3, -3, 4, -4]));
// console.log(rearrangeArray([1, 2, 3, -1, -2, -3]));

function rearrangeArrayOptimal(nums: number[]) {
  let len = nums.length;
  let arr = new Array(len).fill(0);
  let pos = 0;
  let neg = 1;
  let i = 0;

  while (i < len) {
    if (nums[i] > 0 && pos % 2 === 0) {
      arr[pos] = nums[i];
      pos += 2;
    } else if (nums[i] < 0 && neg % 2 !== 0) {
      arr[neg] = nums[i];
      neg += 2;
    }
    i++;
  }

  return arr;
}

console.log(rearrangeArrayOptimal([1, 2, 3, -1, -2, -3]));
