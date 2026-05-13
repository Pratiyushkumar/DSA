function minAnd2ndMin(arr: number[]) {
  arr.sort((a, b) => a - b);

  let first_small = arr[0];
  let sec_small = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== first_small) {
      sec_small = arr[i];
      break;
    }
  }

  if (sec_small === -Infinity) {
    return -1;
  }

  return [first_small, sec_small];
}

// console.log(minAnd2ndMin([12, 25, 8, 55, 10, 33, 17, 11]));
// console.log(minAnd2ndMin([12, 25, 8, 55, 10, 10, 7, 7]));
// console.log(minAnd2ndMin([1, 1, 1, 1]));

function minAnd2ndMinBetter(arr: number[]) {
  let min = Number.MAX_SAFE_INTEGER;
  let sec_min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      sec_min = Math.min(arr[i], sec_min);
    }
  }

  if (sec_min === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return [min, sec_min];
}

// console.log(minAnd2ndMinBetter([12, 25, 8, 55, 10, 33, 17, 11]));
// console.log(minAnd2ndMinBetter([1, 1, 1, 1]));

function minAnd2ndMinOptimal(arr: number[]) {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }

  if (second === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return [first, second];
}

console.log(minAnd2ndMinOptimal([12, 25, 8, 55, 10, 33, 17, 11]));
console.log(minAnd2ndMinOptimal([1, 1, 1, 1]));
