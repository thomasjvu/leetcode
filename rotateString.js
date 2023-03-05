// LeetCode #796. Rotate String
/* Instructions
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

    For example, if s = "abcde", then it will be "bcdea" after one shift.

 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:

Input: s = "abcde", goal = "abced"
Output: false

 

Constraints:

    1 <= s.length, goal.length <= 100
    s and goal consist of lowercase English letters.

*/

// Solution
const rotateString = (s, goal) => {
    
    s = s.split('')

    for (let i = 0; i < s.length; i++) {

        let temp = s.shift()
        s.push(temp)

        if (s.join('') === goal) {
            return true
        }
    }

    return false
}

// Explanation
// Change s into an array using s.split('') so that we can use array methods on it
// Loop through the length of the array, s
// For each iteration, shift the first element of s into a new variable, temp, then push temp to the end of s
// Then, check if s joined as a string is equal to the goal, and if it is, return true
// Otherwise, by the end of all the loops, return false
//
// Time Complexity: O(n), linear time
