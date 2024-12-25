function sortColors(nums: number[]) {
  return nums.sort((a, b) => a - b);
}

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

function sortColorsBetterSolution(nums: number[]) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else count2++;
  }

  for (let i = 0; i < count0; i++) nums[i] = 0;
  for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
  for (let i = count0 + count1; i < nums.length; i++) nums[i] = 2;

  return nums;
}

// console.log(sortColorsBetterSolution([2, 0, 2, 1, 1, 0]));
// console.log(sortColorsBetterSolution([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

//solving this optimal solution using dutch national flag algorithm
function sortColorsOptimalSolution(nums: number[]) {
  let n = nums.length;
  let low = 0,
    mid = 0;
  let high = n - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

console.log(sortColorsOptimalSolution([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
