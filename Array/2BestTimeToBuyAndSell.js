/**
 * Best time to sell and buy stock
 * Find the maximum difference between two numbers such that the smaller number comes before the larger one.”
 * What is the lowest price before today, and how much profit can I make today
 */

// Consider first value as minimum
// One counter for minimum price of stock
// Second counter for max profit of stock
function findBestTimeToSellAndBuy(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
    console.log(`Min Price ----->`, minPrice);
    console.log(`Max profit ------->`, maxProfit);
  }
  return { minPrice: minPrice, maxProfit };
}

findBestTimeToSellAndBuy([1, 2, 3, 4, 5]);
