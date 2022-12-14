// LeetCode #2455. Average Value of Even Numbers That Are Divisible by Three
/* Instructions
 * Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

 

Example 1:

Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.

 

Constraints:

    1 <= nums.length <= 1000
    1 <= nums[i] <= 1000
*/




// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */

const averageValue = nums => {

    newArr = nums.filter(element => element % 6 === 0)

    if (newArr.length === 0) {
        return 0
    } else {
        return Math.floor( newArr.reduce((acc,curr) => acc + curr, 0) / newArr.length )
    }

}



// Explanation
// The only numbers that are even and divisible by 3 are numbers that can be divided by 6 and have a remainder of 0
// Instantiate a new array that uses that array `.filter()` method to include only elements that are perfectly divisble by 6
// If the length of the new array is 0, then return 0.
// Or else, use the array `.reduce()` method to sum the numbers and divide it by the length of the array, and wrap it in Math.floor() to get the number rounded down. 

// You cannot expect the conditional to function properly if you check if the value is equal to [], because that is the representation of a new empty array, not the representation of any empty array.
