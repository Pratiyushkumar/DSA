/**
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */

function pattern2(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      temp += '*';
    }
    console.log(temp);
    temp = '';
  }
}

pattern2(4);
