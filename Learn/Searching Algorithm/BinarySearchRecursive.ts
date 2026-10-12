function BinarySearchRecursive(
  arr: number[],
  low: number,
  high: number,
  target: number
) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return BinarySearchRecursive(arr, low, mid - 1, target);
  } else {
    return BinarySearchRecursive(arr, mid + 1, high, target);
  }
}

let arr = [3, 4, 6, 7, 9, 12, 16, 17];

console.log(BinarySearchRecursive(arr, 0, arr.length - 1, 12));
console.log(BinarySearchRecursive(arr, 0, arr.length - 1, 3));
console.log(BinarySearchRecursive(arr, 0, arr.length - 1, 13));
