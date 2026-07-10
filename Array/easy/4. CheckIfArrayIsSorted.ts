function checkIfArrayIsSorted(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkIfArrayIsSorted([5, 4, 6, 7, 8]));
console.log(checkIfArrayIsSorted([1, 2, 3, 4, 5]));
