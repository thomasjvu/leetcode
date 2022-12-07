// LeetCode #191. Number of 1 Bits
/* Instructions

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

Constraints:

The input must be a binary string of length 32.
 

Follow up: If this function is called many times, how would you optimize it?
*/

// Solution
const hammingWeight = n => {
    let count = 0
    let str = n.toString(2)

    for (char of str) {
        if (char === "1") {
            count++
        }
    }
    return count
}

// Explanation
// Instantiate a new number variable to hold the count of 0
// Use the method `.toString(2)` to turn a number into its string equivalent in Binary, which will be the same number given just as a string.
// Loop through each iteration of the string and if it equal to "1", add 1 to the count
// Return the count

