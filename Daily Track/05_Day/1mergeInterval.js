/**
 * Here we are going to solver merge interval problem
 * Input: [[1,3],[2,4],[6,8],[7,9]]
 * Output: [[1,4],[6,9]]
 * Step 1: Create variable to push updated intervals and return updated interval result.
 * Step 2: Initialize result array with first value
 * Step 3: Create loop to check
 *    i. Get current interval
 *    ii. Get last interval in result array
 *    iii. Compare current first and lasts end value
 *    iv. Update incase current first value is less than last second value.
 *    v. Update last second value/range in comparison of last end and current end
 * Step 4: Return result
 */

function mergeIntervals(intervals) {
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = result[(result, result.length - 1)];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

const intervals = [
  [1, 3],
  [2, 4],
  [6, 8],
  [7, 9],
];
const result = mergeIntervals(intervals);
console.log(`Result of merge Intervals `, result);
