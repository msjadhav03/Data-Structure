/**
 * Here we are going to solve problem of valid anagram
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Example
const result = isAnagram("listen", "silent");
const result1 = isAnagram("hello", "world");
console.log(`"listen", "silent"`, result1);
console.log(`"hello", "world"`, result1);
