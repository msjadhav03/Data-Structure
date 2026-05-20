/**
 * Finding Duplicate element in an array
 */

function findDuplicate(arr) {
  let set = new Set();
  let duplicates = [];

  for (let element of arr) {
    if (set.has(element)) {
      duplicates.push(element);
    }
    set.add(element);
  }

  return duplicates;
}

const arr = [1, 2, 3, 4, 5, 6, 2, 8, 9, 10, 3];

const result = findDuplicate(arr);

console.log(`Duplicate elements in the arry : ${result}`);
