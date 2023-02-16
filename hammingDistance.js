// LeetCode #461. Hamming Distance
/* Instructions
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.

Example 2:

Input: x = 3, y = 1
Output: 1

 

Constraints:

    0 <= x, y <= 231 - 1

*/

// Solution
const hammingDistance = (x, y) => {
    let binX = x.toString(2)
    let binY = y.toString(2)
    
    let count = 0

    // Pad the shorter string with leading 0s
    if (binX.length < binY.length) {
        binX = binX.padStart(binY.length, '0')
    } else if (binY.length < binX.length) {
        binY = binY.padStart(binX.length, '0')
    }

    for (let i = 0; i < binX.length; i++) {
        if (binX[i] !== binY[i]) {
            count++
        }
    }

    return count
}

// Explanation
// Initialize a variable, binX, which is the binary of x using the .toString(2) method
// Initailize a variable, binY, which is the binary of y using the .toString(2) method
// Declare a variable, count, which will count where each bit is different 
// The padStart method pads the current string with another string, 0, until the resulting string reaches the given length, which in this case is the length of the longer binary string
// Loop through each element in both strings, and if the elements at each index aren't equal, add 1 to our count
// Return the count, which will be the hammingDistance
