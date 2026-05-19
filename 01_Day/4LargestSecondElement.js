/**
 * Largest Second Element
 * ======= Brute Force ============
 *  1. Find largest iterate over the array O(n)
 *  2. Find second largest iterate over the array skip if it is largest.
 *  3. Return Largest and Second Largest
 *
 *
 * ======== Optimize Solution =========
 *  1. Iterate over the array
 *  2. Mark Largest and Second Largest each time
 *  3. Check if current element is largest if current is largest then mark second largest equal to largest. And update largest with current value
 *  4. If current is not largest check if it greater then second largest, if current is greater then second largest, update second largest with current value
 *  5. Return Largest and Second after all elements has been traversed
 *
 */

function findSecondLargest(arr) {
  let largest = -1,
    secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    // check for largest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    // Check for second largest
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return { largest, secondLargest };
}

const arr = [1, 4, 11, 100, 23, 2];
const { largest, secondLargest } = findSecondLargest(arr);
console.log(`Largest: ${largest}\nSecond Largest: ${secondLargest}`);
