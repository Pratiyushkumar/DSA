/*
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA
*/

function pattern17(n) {
  let temp = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      temp += ' ';
    }
    let char = 65;
    let breakPoint = i;
    for (let j = 0; j < 2 * i + 1; j++) {
      temp += String.fromCharCode(char);
      if (j < breakPoint) {
        char++;
      } else {
        char--;
      }
    }

    for (let j = 0; j < n - i - 1; j++) {
      temp += ' ';
    }
    console.log(temp);
    temp = '';
  }
}

pattern17(6);
