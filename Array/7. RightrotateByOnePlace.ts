function rightRotateArrayByOnePlace(arr: number[]) {
  let n = arr.length - 1;
  let temp = arr[n];
  for (let i = n; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

console.log(rightRotateArrayByOnePlace([5, 6, 10, 12, 14]));
