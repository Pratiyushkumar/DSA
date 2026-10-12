function BinarySearchLowerBound(arr: number[], x: number) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= x) {
      console.log('going inside mid');
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// console.log(BinarySearchLowerBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 1));
console.log(BinarySearchLowerBound([1, 2, 8, 10, 11, 12, 19], 0));
