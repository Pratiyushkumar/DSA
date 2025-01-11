function rotate(matrix: number[][]) {
  let n = matrix.length;
  let ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - i - 1] = matrix[i][j];
    }
  }

  return ans;
}

// console.log(
//   rotate([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

function rotateOptimize(matrix: number[][]) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log('transopose of matrix', matrix);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - i];
      matrix[i][n - 1 - i] = temp;
    }
  }
  return matrix;
}

// console.log(
//   rotateOptimize([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );
console.log(
  rotateOptimize([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
