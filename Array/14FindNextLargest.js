/**
 * Input: [1,2,5,3,4]
 * Output: [5,5,-1,4,-1]
 */

// Stack to keep largest element track
// Traverse from right to left - cause mark largest from right
function nextLargest(arr) {
  let n = arr.length - 1;
  let stk = [];
  let result = new Array(n).fill(-1);

  for (let i = n; i >= 0; i--) {
    // Check if stk have greatest element and if current element is greater than pop previously existed element from the stack
    if (stk.length > 0 && arr[i] >= stk[stk.length - 1]) {
      stk.pop();
    }

    // if Stack have some element then mark it as next largest element for current element
    if (stk.length > 0) {
      result[i] = stk[stk.length - 1];
    }

    // Otherwise push current element as largest element - Suppose last element is largest then push it to stack and mark it as next largest for previous element
    stk.push(arr[i]);
  }
  return result;
}

const arr = [1, 2, 3, 5, 4, 7];
const result = nextLargest(arr);

console.log(`Input: ${arr}\nOutput: ${result}`);
