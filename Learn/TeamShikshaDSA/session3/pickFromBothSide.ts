function maximumPossibleSum(A: number[], B: number) {
  let n = A.length;
  let maxSum = -Infinity;

  for (let i = 0; i < B; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += A[j];
    }

    for (let k = 0; k < B - i; k++) {
      rightSum += A[n - 1 - k];
    }

    let currentSum = leftSum + rightSum;
    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

// console.log(maximumPossibleSum([1, -2, 3, -1, 4, -3, 5], 3));

// console.log(maximumPossibleSum([5, -1, 2, 3, -2, 4, 1], 3));
// console.log(maximumPossibleSum([5, -2, 3, 1, 2], 3));
console.log(maximumPossibleSum([1, 2], 1));
