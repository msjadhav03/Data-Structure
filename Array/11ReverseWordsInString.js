/**
 * Reverse words in string
 * Example: "Hello there let's learn Data structure"
 * Expected Output: "structure Data learn let's there Hello"
 */

function reverseWordsInString(stringToBeReversed) {
  // Strings are immuatable so creating array of strings seperated by space
  const splittedStringArray = stringToBeReversed.split(" ");

  // Keeping two pointers, to iterate and swap left to right element.
  let left = 0,
    right = splittedStringArray.length - 1;
  // Loop to iterate until all words in string are swapped
  while (left < right) {
    let temp = splittedStringArray[left];
    splittedStringArray[left] = splittedStringArray[right];
    splittedStringArray[right] = temp;
    // Updating pointer in order to move to next string to swap words from left to right
    left++;
    right--;
  }
  return splittedStringArray.join(" ");
}

const result = reverseWordsInString(
  "Hello    there let's learn Data structure",
);
console.log(`================ Final Result ================`, result);
reverseWordsInString("Hello    there let's learn Data structure");
