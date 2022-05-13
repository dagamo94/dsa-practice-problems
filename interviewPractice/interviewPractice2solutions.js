// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

// Brute Force: O(n^2)

// function maxProfit(prices) {
//   let largestProfit = 0;
//   // outer loop is buying/entry price
//   for (let i = 0; i < prices.length; i++) {
//     const buyingPrice = prices[i];
//     // inner loop is selling/exit price
//     for (let j = i + 1; j < prices.length; j++) {
//       const sellingPrice = prices[j];
//       const profit = sellingPrice - buyingPrice;
//       if (profit > largestProfit) {
//         largestProfit = profit;
//       }
//     }
//   }
//   return largestProfit;
// }

// O(n^2)

// function maxProfit(prices) {
//     if (prices.length === 0) {
//       return [];
//     }
//   let profit = 0;
//   // outer loop is selling/exit price
//   for (let i = prices.length - 1; i >= 0; i--) {
//     console.log(i);
//     let mainPrice = prices[i];
//     // inner loop is buying/entry price
//     for (let x = 0; x < prices.length; x++) {
//       let secondPrice = prices[x];
//       let diff = mainPrice - secondPrice;
//       if (profit < diff) {
//         profit = diff;
//       }
//     }
//   }
//   if (profit <= 0) {
//     return `Don't Buy! ${profit} dollars made.`;
//   }
//   return profit;
// }

function maxProfit(prices) {
    let maxProfit = 0;
    let startPrice = prices[0]; // first price in the array
  
    for (let i = 1; i < prices.length; i++) {
      const price = prices[i];
  
      if (price < start) {
        entryPrice = price; // new starting price if it's lower than the current starting price
        continue; // skips current iteration and moves onto the next
      }
  
      const profit = price - startPrice; // calculate the profit between buying and selling prices
      if (profit > maxProfit) maxProfit = profit; // reassign max profit if more profit can be made
    }
  
    return maxProfit;
  }
  
  // time complexity: O(n)
  function maxProfit(prices) {
    let maxProfit = 0; // variable to store the max computed profit
    let minPrice = prices[0]; // initialize buying price as first price in array
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
    return maxProfit;
  }
  
  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 - buy at 1, sell at 6
  console.log(maxProfit([7, 6, 5, 4, 3, 2])); // 0 - don't buy!
  console.log(maxProfit([])); // 0