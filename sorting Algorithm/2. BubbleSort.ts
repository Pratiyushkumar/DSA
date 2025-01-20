function BubbleSort(nums: number[]) {
  let n = nums.length;

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}

console.log(BubbleSort([13, 46, 24, 52, 20, 9]));
