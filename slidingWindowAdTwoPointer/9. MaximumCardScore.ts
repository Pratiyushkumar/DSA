function maxScore(cardPoints: number[], k: number) {
  let leftSum = 0;
  let rightSum = 0;
  let n = cardPoints.length;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }
  maxSum = leftSum;
  let rightIndex = n - 1;
  for (let i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];
    rightSum += cardPoints[rightIndex];
    rightIndex--;
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }

  return maxSum;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));
