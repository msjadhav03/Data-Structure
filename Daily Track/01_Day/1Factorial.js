// Recursive call - Finding factorial of given number
/***
 * Input: 5
 * Output: 120
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * stack
 * [5]
 * [4]
 * [3]
 * [2]
 * [1]
 * [0]
 */

function findFactorial(n) {
  if (n == 0) {
    // Base case
    return 1;
  }
  return n * findFactorial(n - 1);
}

const n = 5;
const factorial = findFactorial(n);

console.log(`Factorial of ${n}:`, factorial);
