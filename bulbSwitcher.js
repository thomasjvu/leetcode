// LeetCode #319. Bulb Switcher
/* Instructions
There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

 

Example 1:

Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 1

 

Constraints:

    0 <= n <= 109


*/

// Solution (Brute Force), doesn't work for large inputs
const bulbSwitch = (n) => {
    // create array of n elements
    let arr = Array(n).fill(true)

    // go through each round from 1 to n
    for (let i = 2; i <= n; i++) {
        // for each ith round, toggle bulbs whose indices are multiples of i
        for (let j = i - 1; j < n; j+= i) {
            arr[j] = !arr[j]
        }
    }

    // loop through array and count all bulbs that are on
    let count = 0

    for (let i = 0; i < n; i++) {
        if (arr[i]) count++
    }

    return count
}

// Explanation
// Time Complexity: O(n^2), Quadratic Time - Doesn't work for large numbers

// Solution (Algorithm)
const bulbSwitch = (n) => Math.floor(Math.sqrt(n))

// Explanation
// Time Complexity: O(1), Constant Time - Perfect Square Algorithm
// Essentially, a bulb will be on only if it is toggle an odd number of times.
// The [i]th bulb will be toggled for eeach factor of i of n, including 1 and n.
// Therefore, the [i]th bulb will be toggled for (number of factors of [i]) times.
// Since a factor comes in  pairs, each factor [i] has an [i/i] pair except when [i] is a perfect square.
// Therefore, a bulb will be toggled an odd number of times only if [i] is a perfect square.
// We can thus count the number of perfect squares between 1 and n to get the answer.
