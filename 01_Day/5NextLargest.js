/**
 * Mark next largest to current element and return
 * Input: [1,2,3,4,5]
 * Output: [2,3,4,5,-1]
 *
 * Input: [1,8,5,6,3,11]
 * Output: [8, -1, 6, -1, 11, -1]
 */

function findNextLargest(arr) {
  const n = arr.length;
  let stk = [];
  let result = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    console.log(`************ Iteration Started ${i} **************\n\n`);
    if (stk.length > 0 && arr[i] > stk[stk.length - 1]) {
      stk.pop();
    }
    if (stk.length > 0) {
      result[i] = stk[stk.length - 1];
    }
    stk.push(arr[i]);
    console.log(`Current Stack [${stk}]\nUpdated Result=[${result}]`);
    console.log(
      `\n\n--------------- Iteration Completed ${i}-------------\n\n`,
    );
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const result = findNextLargest(arr);

console.log(`Original Array: ${arr}\nResult: ${result}`);
