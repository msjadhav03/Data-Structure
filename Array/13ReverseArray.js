/**
 *  arr = [1,2,3,4,5]
 *  n = arr.length - 1 = 4
 *
 * Iteration upto n/2 = 2
 *
 *  n = 4
 *
 *
 *  i = 0
 *  n - i = 4
 *
 *  i = 1
 *  n - i = 3
 *
 * @param {integer} arr
 */

function reverseArray(arr) {
  let n = arr.length - 1;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }
}

const arr = [1, 2, 3, 4, 5];
const reverseArray = reverseArray(arr);

console.log(`Original Array: ${arr}\nReversed Array: ${reverseArray}`);
