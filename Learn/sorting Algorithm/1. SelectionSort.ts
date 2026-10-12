function selectionSort(nums: number[]) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  return nums;
}

// console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([13, 46, 24, 52, 20, 9]));
