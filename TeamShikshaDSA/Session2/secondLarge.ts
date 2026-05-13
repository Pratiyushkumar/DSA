function SecondLarge(arr: number[]) {
  let large_number = Number.MIN_SAFE_INTEGER;
  let secondLarge_number = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > large_number) {
      secondLarge_number = large_number;
      large_number = arr[i];
    } else if (arr[i] > secondLarge_number && arr[i] !== large_number) {
      secondLarge_number = arr[i];
    }
  }

  if (secondLarge_number === Number.MIN_SAFE_INTEGER) {
    return -1;
  }

  return secondLarge_number;
}

// console.log(SecondLarge([12, 35, 1, 10, 34, 1]));
// console.log(SecondLarge([10, 5, 10]));
// console.log(SecondLarge([10, 10, 10]));
