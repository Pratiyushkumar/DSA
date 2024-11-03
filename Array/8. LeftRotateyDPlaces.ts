function LeftRotateByDPlaces(nums: number[], k: number) {
  let temp: number[] = [];
  let n = nums.length;

  k = k % n;

  for (let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }

  for (let i = k; i < n; i++) {
    nums[i - k] = nums[i];
  }

  for (let i = n - k; i < n; i++) {
    nums[i] = temp[i - (n - k)];
  }

  return nums;
}

// console.log(LeftRotateByDPlaces([3, 7, 8, 9, 10, 11], 4));

function LeftRotateByDPlacesOptimal(nums: number[], k: number) {
  let n = nums.length - 1;
  k = k % n;
  let firstReverse = reverseElements(nums, 0, k - 1);
  let secondReverse = reverseElements(firstReverse, k, n);
  let reverse = reverseElements(secondReverse, 0, n);
  return reverse;
}

function reverseElements(arr: number[], start: number, end: number) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(LeftRotateByDPlacesOptimal([1, 2, 3, 4, 5, 6, 7], 7));
