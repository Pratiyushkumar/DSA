function getMinMax(arr: number[]) {
  let sortedArr = arr.sort((a, b) => a - b);

  let min = sortedArr[0];
  let max = sortedArr[sortedArr.length - 1];

  return [min, max];
}

// console.log(getMinMax([1, 4, 3, 5, 8, 6]));

function getMinMaxBetter(arr: number[]) {
  let min_ele = Number.MAX_SAFE_INTEGER;
  let max_ele = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_ele) {
      min_ele = arr[i];
    }

    if (arr[i] > max_ele) {
      max_ele = arr[i];
    }
  }

  return [min_ele, max_ele];
}

// console.log(getMinMaxBetter([1, 4, 3, 5, 8, 6]));
// console.log(getMinMaxBetter([12, 3, 15, 7, 9]));
console.log(getMinMaxBetter([32011, 123, 1045, 1205, 254, 28763, 6537, 3161]));
