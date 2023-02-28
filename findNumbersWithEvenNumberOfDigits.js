// LeetCode #1295. Find Numbers with Even Number of Digits
/* Instructions
Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

 

Constraints:

    1 <= nums.length <= 500
    1 <= nums[i] <= 105

*/

// Solution
const findNumbers = (nums) => {
    let count = 0
    nums = nums.map(num => String(num))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].length % 2 === 0) {
            count++
        }
    }
    return count
}

// Explanation
// Instantiate a number variable to hold the count of numbers with even digits, count
// Use the .map() method to change each number in the nums array to the string equivalent
// Then, loop through each element in the nums array, and check if the length is even or odd
// If the length is even, increment the count variable by 1
// At the end of all the loops, return the count variable
