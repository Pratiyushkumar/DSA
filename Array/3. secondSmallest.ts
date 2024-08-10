function findSecondSmallest(arr: number[]) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  if (arr.length < 2) {
    return -1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([1, 2, 4, 7, 7, 5]));
console.log(findSecondSmallest([1]));
