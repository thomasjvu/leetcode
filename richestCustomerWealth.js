// LeetCode #1672. Richest Customer Wealth
/* Instructions
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

*/

// Solution
const maximumWealth = accounts => {
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((acc, curr) => acc + curr, 0)
    }
    accounts.sort((a, b) => b - a)
    return accounts[0]
}

// Explanation
// Time Complexity: O (n log n) - .sort() method is O(n log n)
// Loop through each element of the accounts array (and these elements will be arrays themselves)
// For each iteration, use the .reduce() method to sum the items in each subarray
// Then, use the .sort() method to sort the array in place in descending order
// Finally, return the first element of the accounts array, which will be the richest customer's wealth

// Solution (Refactored)
const maximumWealth = (accounts) => {
    // loop through each array, and change inner array to its reduced value (total wealth of each customer)
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((acc, curr) => acc + curr, 0)
    }

    return Math.max(...accounts)
}
// Explanation
// Time Complexity: O(n)
// Math.max time complexity is O(n)
// Array.reduce time complexity is O(n)
// For Loop time complexity is O(n)
