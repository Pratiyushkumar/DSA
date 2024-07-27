/**
 ******
 *    *
 *    *
 *    *
 *    *
 ******
 */

function pattern21(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        temp += '*';
      } else {
        temp += ' ';
      }
    }
    console.log(temp);
    temp = '';
  }
}

pattern21(6);
