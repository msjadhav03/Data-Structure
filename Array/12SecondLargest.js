function findSecondLargest(arr) {
  let largest = -1,
    secondLargest = -1;
  // First marking and matching if current is Largest of all
  // if current is not largest checking if it is second largest
  for (let i = 0; i < arr.length; i++) {
    //First Largest match
    if (arr[i] > largest && largest != arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return { largest, secondLargest };
}

const { largest, secondLargest } = findSecondLargest([11, 23, 45, 8, 9]);

console.log(`Largest Element : ${largest} \nSecond Largest: ${secondLargest}`);
