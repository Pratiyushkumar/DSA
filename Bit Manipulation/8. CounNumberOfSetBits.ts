// function CountNumberOfSetBits(n: number) {
//   let count = 0;
//   while (n > 1) {
//     if (n % 2 === 1) count++;
//     n = Math.floor(n / 2);
//   }

//   if (n === 1) count++;
//   return count;
// }
function CountNumberOfSetBits(n: number) {
  let count = 0;
  while (n > 1) {
    count += n & 1;
    n = n >> 1;
  }

  if (n === 1) count++;
  return count;
}
console.log(CountNumberOfSetBits(16));
console.log(CountNumberOfSetBits(13));
