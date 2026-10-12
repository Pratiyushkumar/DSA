function rotateArray(arr: number[], d: number) {
  let n = arr.length;
  d = d % n;

  let temp = arr.slice(n - d);

  for (let i = n - 1 - d; i >= 0; i--) {
    arr[i + d] = arr[i];
  }

  for (let i = 0; i < d; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

// console.log(rotateArray([1, 2, 3, 4, 5], 1));

function rotateArrayBetter(arr: number[], d: number) {
  let n = arr.length;
  d = d % n;

  reverseArray(0, n - 1, arr);
  reverseArray(0, d - 1, arr);
  reverseArray(d, n - 1, arr);

  return arr;
}

function reverseArray(start: number, end: number, arr: number[]) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

// console.log(rotateArrayBetter([1, 2, 3, 4, 5, 6, 7], 1));
