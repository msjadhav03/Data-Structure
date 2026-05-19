/**
 * Mover all zeros to end of the array
 * Keep one counter to point unique value index and other pointer to iterate
 */

function moveZeros(arr) {
  let i = arr[0];
  console.log(`Array before processing arr`, arr);
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== 0) {
      console.log(`Unique counter i`, i);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      console.log(` [nums[i], nums[j]]`, [arr[i], arr[j]]);
      i++;

      console.log(`Array after each step ----->`, arr);
    }
  }
  console.log(`Final Array -------->`, arr);
}

moveZeros([1, 0, 3, 0, 5]);
