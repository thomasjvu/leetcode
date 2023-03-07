// LeetCode #1047. Remove All Adjacent Duplicates In String
/* Instructions
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:

Input: s = "azxxzy"
Output: "ay"

 

Constraints:

    1 <= s.length <= 105
    s consists of lowercase English letters.

*/


// Solution
const removeDuplicates = (s) => {
    s = s.split('')

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            s.splice(i, 2)
            i = i - 2
        }
    }

    return s.join('')
}

// Explanation
// Use the .split('') method to split the given string argument into an array, so that we can use the splice() method on it
// Loop through the length of the array -1 
// For each loop, check if the element at the current index is equal (===) to the next
// If it is, remove those 2 elements using the .splice(i, 2) method
// After a splice, set the index back two elements using i - 2
// At the end of the loops, return s as a string using s.join('')
