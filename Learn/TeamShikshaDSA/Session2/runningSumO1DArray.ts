function runningSum(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i - 1] + arr[i];
    arr[i] = sum;
  }
  return arr;
}

// console.log(runningSum([1, 2, 3, 4]));
// console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
