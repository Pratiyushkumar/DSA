/**
    * * * * *
    * * * * *
    * * * * *
    * * * * *
 */

function pattern1(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp += '* ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern1(4);
