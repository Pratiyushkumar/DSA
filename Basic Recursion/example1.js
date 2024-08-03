let count = 0;
function example1() {
  if (count === 10) {
    return;
  }
  console.log(count);
  count++;
  example1();
}

example1();
