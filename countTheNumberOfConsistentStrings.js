// LeetCode #1684. Count the Number of Consistent Strings
/* Instructions
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

 

Constraints:

    1 <= words.length <= 104
    1 <= allowed.length <= 26
    1 <= words[i].length <= 10
    The characters in allowed are distinct.
    words[i] and allowed contain only lowercase English letters.

*/

function countConsistentStrings(allowed, words) {
    // create a new map object
    let map = new Map()
    // instantiate a consistent string count
    let consistent = 0

    // loop through the allowed characters and add each to the map
    for (let i = 0; i < allowed.length; i++) {
        map.set(allowed[i], 1)
    }

    // loop through each word and add 1 to the consistent string count
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        consistent++
        for (let j = 0; j < word.length; j++) {
            // for each word, check if the character is in the map
            if (!map.has(word[j])) {
                // if it doesn't, decrement the consistent count
                consistent--
                break
            }
        }
    }

    // return the total number of consistent strings
    return consistent
}
