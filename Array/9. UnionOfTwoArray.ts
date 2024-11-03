function findUnion(nums1: number[], nums2: number[]) {
  let freq = new Map();
  let union: number[] = [];

  for (let num of nums1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [key] of freq) {
    union.push(key);
  }

  return union.sort((a, b) => a - b);
}

// console.log(
//   findUnion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
// );

// console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));

function findUnion2(nums1: number[], nums2: number[]) {
  let set = new Set<number>();
  let union: number[] = [];

  for (let num of nums1) {
    set.add(num);
  }

  for (let num of nums2) {
    set.add(num);
  }

  for (let key of set) {
    union.push(key);
  }

  return union.sort((a, b) => a - b);
}

// console.log(findUnion2([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));

function findUnion3(nums1: number[], nums2: number[]) {
  let union: number[] = [];
  let n1 = nums1.length;
  let n2 = nums2.length;
  let i = 0,
    j = 0;

  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      if (union[union.length] === 0 || union[union.length - 1] !== nums1[i]) {
        union.push(nums1[i]);
      }
      i++;
    } else {
      if (union[union.length] === 0 || union[union.length - 1] !== nums2[j]) {
        union.push(nums2[j]);
      }
      j++;
    }
  }

  while (i < nums1.length) {
    if (union[union.length - 1] !== nums1[i]) union.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    if (union[union.length - 1] !== nums2[j]) union.push(nums2[j]);
    j++;
  }

  return union;
}

console.log(findUnion3([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));
