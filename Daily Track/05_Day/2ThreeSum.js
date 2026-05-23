/**
 * Here we will be solving 3 Sum problem.
 * Find unique triplets where a + b + c = 0
 * Step 1: Sort array
 * Step 2: Create pointer left and right for iteration
 * Step 3: Initalize left, right pointer.
 * Step 4: Create Iteration to find triplets
 * Step 5: Each iteration check if previous and current are same
 * Step 6: Create another nested iteration to move pointers.
 * Step 7. if we find current sum = 0 = arr[i] + arr[left] + arr[right]we will push to result
 * Step 8. another iteration to move left in case of duplicate element
 * Step 9. Another iteration to move right in case of duplicate element
 * Step 10. if current sum is less than 0, will increment left else decrease right
 *
 */

function findThreeSum(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  for (let i = 1; i < arr.length; i++) {
    if (i > 1 && arr[i] === arr[i - 1]) continue;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
      }
      if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

const arr = [-1, 0, 1, 2, -1, -4];
const result = findThreeSum(arr);
console.log(`Final Result`, result);
