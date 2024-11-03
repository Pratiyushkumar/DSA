function canFormRectangle(l1, l2, l3) {
  // Helper function to check if 4 sides can form a rectangle
  function isRectangle(a, b, c, d) {
    console.log('L1:' + l1 + ' L2:' + l2 + ' L3:' + l3);
    console.log(a, b, c, d);
    return (a === b && c === d) || (a === c && b === d) || (a === d && b === c);
  }

  // Try breaking each stick
  for (let stick of [l1, l2, l3]) {
    for (let break1 = 1; break1 < stick; break1++) {
      let break2 = stick - break1;
      let sides = [break1, break2];
      for (let otherStick of [l1, l2, l3]) {
        if (otherStick !== stick) sides.push(otherStick);
      }
      if (isRectangle(sides[0], sides[1], sides[2], sides[3])) {
        return 'YES';
      }
    }
  }
  return 'NO';
}

function solveBruteForce(t, testcases) {
  let results = [];
  for (let i = 0; i < t; i++) {
    let [l1, l2, l3] = testcases[i];
    results.push(canFormRectangle(l1, l2, l3));
  }
  return results;
}

// Example usage
let t = 4;
let testcases = [[5, 5, 4]];

console.log(solveBruteForce(t, testcases));
