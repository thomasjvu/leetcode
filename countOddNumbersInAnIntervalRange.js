// LeetCode # 1523. Count Odd Numbers in an Interval Range
/* Instructions
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

 

Constraints:

    0 <= low <= high <= 10^9
*/

// Solution (brute force)
function countOdds(low, high) {
    let count = 0
    for (let i = low; i <= high; i++) {
        if (i % 2 != 0) count++
    }
    return count
}

// Explanation
// Time Complexity: O(n), linear time, as we will need to loop through each input.

// Solution (algorithm)
function countOdds(low, high) {
    return Math.floor((h + 1) / 2) - Math.floor(l / 2)
}

// Explanation
// Time Complexity: O(1), constant time, we are using the odd counting formula to count the number of odd integers in a given range.
// This does it by getting the floor value of (high + 1) divided by 2, and subtracting that value by the floor of the low divided by 2.
