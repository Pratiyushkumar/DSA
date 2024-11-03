function findPeakElement(nums: number[]) {
  let n = nums.length;

  for (let j = 0; j < n; j++) {
    if (
      (j === 0 || nums[j] > nums[j - 1]) &&
      (j === n - 1 || nums[j] > nums[j + 1])
    ) {
      return j;
    }
  }
}

// console.log(findPeakElement([1, 2, 3, 1]));
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
// console.log(findPeakElement([1, 2]));
// TC = O(n)  and SC = O(1)

function findPeakElement2(nums: number[]): number {
  let n = nums.length;
  if (n === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] > nums[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// console.log(findPeakElement2([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement2([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
