// LeetCode #1941. Check if All Characters Have Equal Number of Occurences
/* Instructions
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

 

Constraints:

    1 <= s.length <= 1000
    s consists of lowercase English letters.
*/


// Solution
function areOccurrencesEqual(s) {
    let map = {}
    for (const char of s) {
        map[char] = map[char] + 1 || 1
    }

    let arr = Object.values(map)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false
        }
    }

    return true
}

// Explanation
// Declare an empty object {}, map
// Loop through each character of the given string, s by using a for..of loop
// Fill the map object with each iteration, setting the property equal to the char and the value += 1 for each occurence
// Create an array of the map's values using the Object.values() method
// Then, loop through each element in the array, and check if any element is not equal to the first element
// If any element is different, return false.
// If none of the elements are different, then return true
