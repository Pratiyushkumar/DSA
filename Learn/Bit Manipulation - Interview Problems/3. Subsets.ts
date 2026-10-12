function subsets(nums: number[]) {
  let n = nums.length;
  let subsets = 1 << n;
  let ans: number[][] = [];

  for (let i = 0; i < subsets; i++) {
    let lists: number[] = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        lists.push(nums[j]);
      }
    }
    ans.push(lists);
  }
  return ans;
}

console.log(subsets([1, 2, 3]));
