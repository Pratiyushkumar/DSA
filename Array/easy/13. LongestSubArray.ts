function LongestSubArray(arr: number[], k: number) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      } else if (sum > k) {
        break;
      }
    }
  }
  return max;
}

// console.log(LongestSubArray([2, 3, 5, 1, 9], 10));

function LongestSubArrayBetterSolution(arr: number[], k: number) {
  let sum = 0;
  let maxLen = 0;
  let prefixSumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let rem = sum - k;

    if (prefixSumMap.has(rem)) {
      maxLen = Math.max(maxLen, i - prefixSumMap.get(rem));
    }

    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }

  return maxLen;
}

// console.log(LongestSubArrayBetterSolution([2, 3, 5, 1, 9], 10));
// console.log(LongestSubArrayBetterSolution([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));

function LongestSubArrayOptimalSolution(arr: number[], k: number) {
  let left = 0,
    right = 0;
  let sum = arr[0];
  let maxLen = 0;
  let n = arr.length;

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
    if (right < n) sum += arr[right];
  }

  return maxLen;
}

console.log(LongestSubArrayOptimalSolution([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));
