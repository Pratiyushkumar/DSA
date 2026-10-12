function QuickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    let pi: number = partition(arr, low, high);
    console.log('pi', pi);
    QuickSort(arr, low, pi - 1);
    QuickSort(arr, pi + 1, high);
  }

  return arr;
}

function partition(arr: number[], low: number, high: number) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[j];
  arr[low] = temp;
  arr[j] = pivot;
  return j;
}

console.log(QuickSort([10, 80, 30, 90, 40, 50, 70], 0, 6));
