/**
 * Here, we will see another searching algorithm called Binary Search.
 * Idea behind it is that we divide sorted list in two halves and check if the target exists
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b); // It will sort the array in ascending order, which is a prerequisite for binary search

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const valueToSearch = 3;

const result = binarySearch(arr, valueToSearch);

console.log(
  `Value ${valueToSearch} is present: ${result !== -1 ? "Yes" : "No"}`,
);
