/**
 * Reverse array elements
 * Input: [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * Time Complexity : O(n/2)
 * Space Complexity: O(1)
 */

function reverseArrayElement(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n / 2; i++) {
    temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];

const reverseArray = reverseArrayElement(arr);

console.log(`Output: ${reverseArray}`);
