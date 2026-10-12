function printReverseLinearly(n) {
  if (n < 1) return;
  console.log(n);
  printReverseLinearly(n - 1);
}

printReverseLinearly(10);
