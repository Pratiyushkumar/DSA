function BucketSort(arr: number[], bucketSize = 5) {
  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) minValue = arr[i];
    if (arr[i] > maxValue) maxValue = arr[i];
  }
  console.log(minValue, maxValue); //3 49
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  console.log('buckets****', buckets);

  const sortedArray: number[] = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b); // you can use insertionSort() for small buckets
    sortedArray.push(...buckets[i]);
  }

  return sortedArray;
}

console.log(BucketSort([29, 25, 3, 49, 9, 37, 21, 43]));
