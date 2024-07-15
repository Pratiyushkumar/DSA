/**
 
 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
 
 */

function pattern3(n) {
    let temp = "";
    for (let i = 0; i < n; i++){
        let counter = 1;
        for (let j = 0; j <= i; j++){
            temp += counter + " ";
            counter++;
        }
        console.log(temp);
        temp = "";
    }
 }

pattern3(6);