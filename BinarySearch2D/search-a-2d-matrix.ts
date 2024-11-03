function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// );

function searchin2DMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === target) {
          return true;
        }
      }
    }
  }

  return false;
}

// console.log(
//   searchin2DMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

function searchin2DMatrixOptimized(
  matrix: number[][],
  target: number
): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
      let left = 0,
        right = n - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[i][mid] === target) return true;
        else if (matrix[i][mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return false;
    }
  }
  return false;
}

// console.log(
//   searchin2DMatrixOptimized(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     32
//   )
// );

function searchIn2DMatrixOptimized2(
  matrix: number[][],
  target: number
): boolean {
  let n = matrix.length;
  let m = matrix[0].length;

  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(
  searchIn2DMatrixOptimized2(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    60
  )
);
