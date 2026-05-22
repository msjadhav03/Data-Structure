/**
 * Problem Statement: Given array with non-negative integers representing the height of bars, find the maximum amount of water that can be trapped between the bars after raining.
 * Input: [1,2,3,4,5,6]
 * Output:
 * Step 1: Two pointer right and left
 * Step 2: Calculate width
 * Step 3: Min height between left and right height
 * Step 4: Calculate current water
 * Step 5: Update max water
 * Step 6: Move pointer with smaller height, if left smaller move left, if right pointer smaller move
 * Step 7: return maxWater
 */

function mostContainedWater(arr) {
  let left = 0,
    right = arr.length - 1,
    maxWater = 0;
  while (left < right) {
    const width = right - left;
    const height = Math.min(arr[left], arr[right]);
    const currentWater = width * height;
    maxWater = Math.max(maxWater, currentWater);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = mostContainedWater(arr);

console.log(`Maximum amount of water that can be contained is ${result}`);
