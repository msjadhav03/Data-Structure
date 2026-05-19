/**
 * Third Largest Element
 * ======== Brute Force ==============
 * 1. Iterate to find largest
 * 2. Iterate to find Second Largest
 * 3. Iterate to find Third Largest
 * 4. Return Largest, Second sLargest, Third Largest.
 *
 * ========== Optimize Solution =============
 * 1. Iteration over each element
 * 2. Check if current is greater then largest, if yes update third largest with second largest, second largest with largest and largest with current
 * 3. Check if current is greater than second largest and less than largest, if yes update third largest with second largest and second largest with current
 * 4. Check if current is greater then third largest and less than other two, if yes update third largest with current
 */

function findThirdLargest(arr) {
  let largest = -1,
    secondLargest = -1,
    thirdLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    }

    if (arr[i] > secondLargest && arr[i] < largest && largest > arr[i]) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    }

    if (arr[i] > thirdLargest && arr[i] < secondLargest && arr[i] < largest) {
      thirdLargest = arr[i];
    }
  }
  return { largest, secondLargest, thirdLargest };
}

const arr = [11, 2, 3, 4, 5];
const { largest, secondLargest, thirdLargest } = findThirdLargest(arr);
console.log(
  `Largest: ${largest}\nSecond Largest ${secondLargest}\nThird Largest:${thirdLargest}`,
);
