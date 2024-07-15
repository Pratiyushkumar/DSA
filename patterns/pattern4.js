/**
 
 1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
 
 */

function pattern4(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      temp += i + 1 + ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern4(6);
