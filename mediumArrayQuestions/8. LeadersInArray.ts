function leaders(nums: number[]) {
  let ans: number[] = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let leaders = true;

    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        leaders = false;
        break;
      }
    }

    if (leaders) ans.push(nums[i]);
  }

  return ans;
}

// console.log(leaders([16, 17, 4, 3, 5, 2]));

function leadersOptimalSolution(nums: number[]) {
  let ans: number[] = [];
  let n = nums.length;
  let max = nums[n - 1];

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > max) {
      ans.push(nums[i]);
      max = nums[i];
    }
  }

  return ans;
}

console.log(leadersOptimalSolution([16, 17, 4, 3, 5, 2]));
