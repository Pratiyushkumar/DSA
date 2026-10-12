/**
 
 1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
 
 */

function pattern6(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      temp += j + 1 + ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern6(6);
