function totalFruit(fruits: number[]) {
  let maxLength = 0;
  for (let l = 0; l < fruits.length; l++) {
    let set = new Set();
    for (let r = l; r < fruits.length; r++) {
      set.add(fruits[r]);
      if (set.size <= 2) maxLength = Math.max(maxLength, r - l + 1);
      else break;
    }
  }
  return maxLength;
}

// console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));

function totalFruitOptimal(fruits: number[]) {
  let map = new Map();
  let maxLength = 0;
  let l = 0;
  let r = 0;
  let n = fruits.length;

  while (r < n) {
    map.set(fruits[r], map.get(fruits[r]) + 1 || 1);
    if (map.size > 2) {
      while (map.size > 2) {
        map.set(fruits[l], map.get(fruits[l]) - 1);
        if (map.get(fruits[l]) === 0) {
          map.delete(fruits[l]);
        }
        l++;
      }
    }

    if (map.size <= 2) {
      maxLength = Math.max(maxLength, r - l + 1);
    }

    r++;
  }

  return maxLength;
}

console.log(totalFruitOptimal([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
