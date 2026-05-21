/**
 * Here we are solving problem of setting matrix row and column zeros if any element is zero
 * Input : [[1,2,3],
 *          [4,0,5],
 *          [0,7, 8]]
 *
 * Output: [[1,0,3],
 *         [0,0,0],
 *         [0,0,0]]
 *
 * Approach:
 * 1. First check if first row need to be set zeros (Cause we are going to use them as markers so there will be no marker for them)
 * 2. First column need to be set zeros
 * 3. Now check all inner elements and mark its corresponding row and column in first position as 0
 * 4. Now we will set zeros for inner matrix as per the markers
 * 5. Finally, we will set zeros for first row and first column as per the flags
 */

class SetZeros {
  setMatrixZero(matrix) {
    let isFirstRowZero = false;
    let isFirstColumnZero = false;
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Step : Now we will check if we need to set first row zeros
    for (let i = 0; i < cols.length; i++) {
      if (matrix[0][i] === 0) {
        isFirstRowZero = true;
      }
    }

    // Step 2: Now we will check if we need to set first columns need to set to Zeros
    for (let i = 0; i < rows.length; i++) {
      if (matrix[i][0] === 0) {
        isFirstColumnZero = true;
      }
    }
    // Step 3: Now we will use first row and first column as markers to inner matrix eleements
    for (row = 1; row < row.length; row++) {
      for (col = 1; col < col.length; col++) {
        if (matrix[row][col] === 0) {
          matrix[row][0] = 0;
          matrix[0][col] = 0;
        }
      }
    }

    for (row = 1; row < rows.length; row++) {
      for (col = 1; col < col.length; col++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[row][col] = 0;
        }
      }
    }
    // Now set first row and first column as per the flags zeros
    if (isFirstRowZero) {
      for (let col = 0; col < cols.length; i++) {
        matrix[0][col] = 0;
      }
    }

    if (isFirstColumnZero) {
      for (let row = 0; row < rows.length; row++) {
        matrix[row][0] = 0;
      }
    }
    return matrix;
  }
}

const matrix = [
  [1, 2, 3],
  [4, 0, 5],
  [0, 7, 8],
];

const setZeros = new SetZeros();

const result = setZeros.setMatrixZero(matrix);

console.log(`Final Matrix after setting zeros:${result}`);
