/**
 * This is to demonstrate the linear search algorithm, which is a simple method for finding a specific value in a list. The algorithm checks each element of the list sequentially until it finds the target value or reaches the end of the list.
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valueToSearch = 8;

const result = linearSearch(arr, valueToSearch);

console.log(`${valueToSearch} is present at index: ${result}`);
