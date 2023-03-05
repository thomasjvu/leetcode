// LeetCode #744. Find Smallest Letter Greater Than Target
/* Instructions
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

 

Constraints:

    2 <= letters.length <= 104
    letters[i] is a lowercase English letter.
    letters is sorted in non-decreasing order.
    letters contains at least two different characters.
    target is a lowercase English letter.

*/

// Solution
const nextGreatestLetter = (letters, target) => {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
            return letters[i]
        }
    }

    return letters[0]

}

// Explanation
// Loop through each element in the letters array, and use the .charCodeAt() method to check if the value of each is less than the target value
// If it is, return that element, as the letters array is already sorted in non-decreasing (ascending) order
// Otherwise, at the end of the loop, return the first element of the letters array
//
// Time Complexity: O(n)
