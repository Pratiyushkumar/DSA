function search(nums: number[], target: number): number {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    //identify sorted left part
    if (nums[mid] >= nums[low]) {
      if (nums[mid] >= target && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    //identify sorted right part
    else if (nums[mid] <= nums[high]) {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
