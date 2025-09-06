// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

function maxProfit(prices) {
     let n = prices.length
     let maxProfit = 0
     let minPrice = Infinity

     for (let i = 0; i < n; i++) {
          if (prices[i] < minPrice) {
               minPrice = prices[i]


          } else {

               let profit = prices[i] - maxProfit
               if (profit > maxProfit) {
                    maxProfit = profit
               }

          }

     }
     return maxProfit


}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
