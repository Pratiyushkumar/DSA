function reverseArray(arr: number[]) {
  let reverseArray = arr.reverse();
  return reverseArray;
}

// console.log(reverseArray([1, 4, 3, 2, 6, 5]));

function reverseArrayOptimized(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArrayOptimized([1, 4, 3, 2, 6, 5]));
