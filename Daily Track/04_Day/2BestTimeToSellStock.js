/**
 * Finding the best time to buy and sell stock
 * Step 1: Find the minimum price of the stock
 * Step 2: Find the maximum profit by comparison
 * Step 3: Return the maximum profit
 */

function findMaxProfit(arr) {
  const n = arr.length - 1;
  if (n === 0) return 0;
  let minPrice = arr[0];
  let maxProfit = -1;
  for (let i = 0; i <= n; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }
  return maxProfit;
}

const arr = [3, 3, 1, 8, 4, 9];

const result = findMaxProfit(arr);
console.log(`Maximum profit that can be made is ${result}`);
