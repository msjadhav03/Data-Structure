/**
 * Reverse string
 * Example : "Hello"
 * Reverse String: "olleh"
 * Split to string Array ---> Two pointers to swap left to right characters ---> Join all swapped character in splitted string array
 */

function reverseString(stringToBeReversed) {
  // Creating array as strigs are immutable in order to reverse
  let splittedStringArray = stringToBeReversed.split("");
  // Creating two pointers for mapping from left to right
  let left = 0;
  let right = stringToBeReversed.length - 1;

  // Now we are reversing swapping string array from left to right till left pointer does not meet right pointer
  while (left < right) {
    // Swapping left element with right element or character in splitted string array
    let temp = splittedStringArray[left];
    splittedStringArray[left] = splittedStringArray[right];
    splittedStringArray[right] = temp;
    left++;
    right--;
  }
  // Finally join or combine all characters of splitted array string to single string
  return splittedStringArray.join("");
}

const result = reverseString("Hello There");

console.log(`======= FINAL RESULT ========`, result);
