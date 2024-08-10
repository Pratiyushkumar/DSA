function LinearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Element not found in the array.
}

// console.log(LinearSearch([3, 4, 6, 7, 9, 12, 16, 17], 7));
console.log(LinearSearch([3, 4, 6, 7, 9, 12, 16, 17], 13));
