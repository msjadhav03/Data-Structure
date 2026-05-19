/**
 * To find missing number in array or given sequence
 * Using Sum formula = n(n+1)/2
 */

function findMissingNumber(arr) {
  let sumOfGivenArray = (arr.length * (arr.length + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }
  let missingNumber = sumOfGivenArray - actualSum;
  console.log(`Missing Number ----->`, missingNumber);
}

findMissingNumber([1, 2, 3, 5, 0]);
