/**
 * Sum 2: Problem to find index of elements present in array who has equal to target sum.
 * Input: [1,2,3,4,5] target: 5
 */

function findTwoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(arr[i], i);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = findTwoSum(arr, target);

console.log(`Elements are found on index ${result}`);
