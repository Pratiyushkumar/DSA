function insertionSort(nums: number[]) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9]));
