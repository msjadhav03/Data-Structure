/**
 * Finding Duplicate Element in an array
 * Set to keep track of elements we have seen so far in case if any element is present repeatedly we can check with set and return that element.
 */

function findDuplicates(arr) {
  let duplicates = [];
  let set = new Set();

  for (element of arr) {
    if (set.has(element)) {
      duplicates.push(element);
    }
    set.add(element);
  }

  return duplicates;
}

const arr = [1, 2, 1, 3, 4, 5, 4, 6, 6, 7];

const result = findDuplicates(arr);

console.log(`Duplicate Elements in the array: ${result}`);
