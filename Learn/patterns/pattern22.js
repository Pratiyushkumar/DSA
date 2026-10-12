/**
N = 3

3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3
 */

function pattern22(n) {
  let temp = '';
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let bottom = j;
      let right = 2 * n - 2 - j;
      let left = 2 * n - 2 - i;
      temp += n - Math.min(Math.min(top, bottom), Math.min(left, right));
    }
    console.log(temp);
    temp = '';
  }
}

pattern22(3);
