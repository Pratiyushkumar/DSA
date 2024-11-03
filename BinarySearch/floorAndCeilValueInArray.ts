function calculateFloorValue(arr: number[], x: number) {
  let left = 0;
  let right = arr.length - 1;
  let pos = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= x) {
      pos = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return pos;
}

function calculateCeilingValue(arr: number[], x: number) {
  let left = 0;
  let right = arr.length - 1;
  let pos = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= x) {
      pos = arr[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return pos;
}

function getFloorAndCeil(arr: number[], x: number) {
  let floorIndex = calculateFloorValue(arr, x);
  let ceilIndex = calculateCeilingValue(arr, x);
  return `${floorIndex}, ${ceilIndex}`;
}

console.log(getFloorAndCeil([3, 4, 4, 7, 8, 10], 8));
