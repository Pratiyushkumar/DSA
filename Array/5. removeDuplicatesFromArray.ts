function removeDuplicates(nums: number[]): number {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  let ans = [...set];
  return ans.length;
}
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Two pointer technique.
function removeDuplicatesOptimalAppraoch(nums: number[]): number {
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  return i + 1;
}

console.log(removeDuplicatesOptimalAppraoch([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
