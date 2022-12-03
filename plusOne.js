// LeetCode #66. Plus One
/* Instructions
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

 

Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
    digits does not contain any leading 0's.
*/



// Solution

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = digits => {
    let num = BigInt(digits.join(''))
    num += BigInt(1)
    return num.toString().split('')
}

// Explanation
// To hold large numbers, we must use the BigInt() wrapper to contain a bigint primitive
// We can put a string in te BigInt() to hold a large number, so join the array digits together
// Then, add 1 to the BigInt value previously stored by adding BigInt(1) to it
// Finally, turn the BigInt variable into a string and then split it into array elements and return that
