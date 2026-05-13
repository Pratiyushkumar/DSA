function subsets(nums: number[]) {
  let res: number[][] = [];
  findSubsets(nums, 0, [], res);

  return res;
}

function findSubsets(
  nums: number[],
  currIndex: number,
  currSubset: number[],
  res: number[][],
) {
  if (currIndex >= nums.length) {
    res.push([...currSubset]);
    return;
  }

  currSubset.push(nums[currIndex]);
  findSubsets(nums, currIndex + 1, currSubset, res);
  currSubset.splice(currSubset.length - 1, 1);
  findSubsets(nums, currIndex + 1, currSubset, res);
}

// console.log(subsets([2, 4, 6]));
console.log(subsets([1,2,3]));
