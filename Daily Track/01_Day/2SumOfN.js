/**
 * Recursive : Finding Sum of N numbers
 * Input: 5
 * Output: 15
 * Time Complexity: O(n)
 * Space Comlexity: O(1)
 */

function findSumOfNumber(n) {
  if (n == 0) {
    return 0;
  }
  return n + findSumOfNumber(n - 1);
}

const n = 6;
const sum = findSumOfNumber(n);
console.log(`Sum of ${n}: ${sum}`);
