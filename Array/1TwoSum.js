/**
 * Two Sum
 *  Target value will be given
 *.
 */

function findTwoSum(arr, target) {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i];
    }
    hashMap.set(arr[i], i);
  }
}

const finalResult = findTwoSum([2, 7, 11, 15], 9);

console.log(`FINAL RESULT:`, finalResult);
