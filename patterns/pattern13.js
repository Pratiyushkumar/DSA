/**
 1
 2   3
 4   5  6
 7   8  9  10
11  12  13  14  15
16  17  18  19  20  21
 */

function pattern12(n) {
  let count = 1;
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      temp += count + ' ';
      count++;
    }
    console.log(temp);
    temp = '';
  }
}

pattern12(6);
