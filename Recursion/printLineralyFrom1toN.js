function printLinearly(i, n) {
  if (i > n) return;
  console.log(i);
  printLinearly(i + 1, n);
}

printLinearly(1, 5); // Output: 1 2 3 4 5
