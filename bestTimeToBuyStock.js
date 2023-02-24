// LeetCode #121. Best Time to Buy and Sell Stock
/* Instructions
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
*/

// Solution
const maxProfit = prices => {

    let total = 0
    let local = 0

    for (let i = 0; i < prices.length - 1; i++) {
        local = Math.max(0, local + prices[i + 1] - prices[i])
        total = Math.max(total, local)
    }

    return total

}

// Explanation
// This is an example of Kadane's algorithm
// Instantiate a number variable, total, and assign it a value of 0
// Instantiate another number variable, local, and assign it a value of 0
// Loop each element of the given array (), prices, and for each iteration...
// Set the local variable to the Max of either 0, or the current local + the element at the next index - the element at the current index
// Set the total variable to the Max of either total or local
// Return the total

// Time Complexity: O(n)
