function leftRightDifference(nums: number[]): number[] {
  let answer: number[] = new Array(nums.length).fill(0);
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    //n
    let rightSum = 0;
    for (let j = i + 1; j < n; j++) {
      rightSum += nums[j];
    }

    let leftSum = 0;
    for (let k = 0; k < i; k++) {
      leftSum += nums[k];
    }

    answer[i] = Math.abs(leftSum - rightSum);
  }
  return answer;
}

// console.log(leftRightDifference([10, 4, 8, 3]));
//O(n)*(O(n-1) + O(n-1)) --> O(n)*O(n) ==> O(n^2)

function leftRightDifferenceBetter(nums: number[]) {
  let n = nums.length;
  let totalSum = 0;

  for (let num of nums) {
    totalSum += num;
  }

  let rightSum = new Array(n).fill(0);
  rightSum[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    let leftSum = totalSum - nums[i] - rightSum[i];
    answer[i] = Math.abs(leftSum - rightSum[i]);
  }

  return answer;
}

// console.log(leftRightDifferenceBetter([10, 4, 8, 3]));
//TC -- O(3n)

function leftRightDifferenceOptimal(nums: number[]) {
  let n = nums.length;
  let totalSum = 0;
  let answer: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }

  let rightSum = totalSum;
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    rightSum -= nums[i];
    answer[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }

  return answer;
}

console.log(leftRightDifferenceOptimal([10, 4, 8, 3]));
console.log(leftRightDifferenceOptimal([15, 10, 2, 8, 9]));
