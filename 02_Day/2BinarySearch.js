/**
 * This is another search algorithm named Binary Search.
 * It is performed on a sorted array by repeatedly dividing array
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
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

const target = 100;

const result = binarySearch(arr, target);

console.log(`Value ${target} is present: ${result !== -1 ? "Yes" : "No"}`);
