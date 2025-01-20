function MergeSort(arr: number[], low: number, high: number) {
  if (low >= high) return arr;
  let mid = Math.floor((low + high) / 2);
  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  Merge(arr, low, mid, high);
  return arr;
}

function Merge(arr: number[], low: number, mid: number, high: number) {
  let left = low;
  let right = mid + 1;
  let temp: number[] = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
}

console.log(MergeSort([5, 4, 3, 2, 1], 0, 4));
