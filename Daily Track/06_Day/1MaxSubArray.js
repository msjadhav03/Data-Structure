/**
 * Here we are trying to solve max array problem
 * We have to find max continous sum of array.
 * Step 1: Create variables to keep track of current sum and max sum
 * Step 2: Create iteration and keep track and current sum and max sum
 * Step 3: Current sum will be either currentSum + arr[i] or arr[i]
 * Step 4: If sum is getting less then current element means it is is negative
 * Step 5: Atlast compare current sum and max sum and mark maxSum
 */

function findMaxSum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(`--- \n\n`);
    console.log(`Value of arr[${i}]: ${arr[i]}`);
    console.log(`Previous currentSum: ${currentSum}`);
    console.log(`Value of currentSum: ${currentSum + arr[i]}`);
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    console.log(`Final currentSum calculated:${currentSum}`);
    console.log(`Previous maxSum: ${maxSum}`);
    maxSum = Math.max(currentSum, maxSum);
    console.log(`Final maxSum calculated: ${maxSum}`);
    console.log(`\n\n---`);
  }
  return maxSum;
}

const arr = [1, -2, 3, 4, 5, -7, 50, 6];
const result = findMaxSum(arr);

console.log(`Final result : `, result);
