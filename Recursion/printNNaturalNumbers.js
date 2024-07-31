function printNaturalNumbers(i, n, sum) {
  if (i > n) {
    console.log(sum);
    return;
  }
  sum += i;
  printNaturalNumbers(i + 1, n, sum);
}
printNaturalNumbers(1, 5, 0);
