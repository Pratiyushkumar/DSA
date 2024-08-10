function findLargestNumberInArrayUsingBuiltInMethod(arr: number[]) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr[newArr.length - 1];
}

// console.log(findLargestNumberInArrayUsingBuiltInMethod([3, 6, 8, 2, 5]));

function findLargestNumberIteratively(arr: number[]) {
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargestNumberInArrayUsingBuiltInMethod([3, 6, 10, 2, 5]));
