// LeetCode #67. Add Binary
/* Instructions
 * Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/



// Pseudocode
// Two binary strings, a & b
// Return their sum as a binary string (regular return)
// How large can numbers be? (We should account for bigInt)

// Solution (doesn't work for really long strings)
// const addBinary = function (a, b) {
//     return (Number(a) + Number(b)).toString(2)    
// }

// Solution (BigInt)
const addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    
    return sum.toString(2)
}

// Explanation
// The JavaScript "0b" literal enables you specify the Binary of an argument directly
// So, create two binary variables that use binary strings a and b respectively
// Then, create a variable, sum, that is equal to the BigInt of aBin + BigInt of bBin
// Then, return the sum as a binary using the .toString(2) method



// Test Cases
console.log('Add Binaries of "11" and "1"', addBinary("11", "1"), "Answer: '100'" )
console.log('Add Binaries of "1010" and "1011"', addBinary("11", "1"), "Answer: '10101'" )
