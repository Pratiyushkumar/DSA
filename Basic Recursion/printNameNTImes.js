/**
 * Printing your name N times
 */

function printName(i, n) {
  if (i > n) return;

  console.log('Pratiyush');
  printName(i + 1, n);
}

printName(1, 7);
