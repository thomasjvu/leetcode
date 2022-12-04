// LeetCode #2085. Count Common Words With One Occurence
/* Instructions
 * Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

Example 1:

Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.
Example 2:

Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.
Example 3:

Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".
 

Constraints:

1 <= words1.length, words2.length <= 1000
1 <= words1[i].length, words2[j].length <= 30
words1[i] and words2[j] consists only of lowercase English letters.

*/

// Solution

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

const countWords = (words1, words2) => {
    let count = 0
    let hash = {}

    for (const word of words1) {
        hash[word] = hash[word] + 1 || 1
    }

    for (const word of words2) {
        hash[word] = hash[word] + 1 || 1
    }

    for (const key in hash) {
        if (hash[key] === 2) {
            count++
        }
    }
    return count
}

// Explanation
// Initialize a variable that will hold the count of common words with one occurence in each array (count)
// Initialize a hashmap (hash = {})
// Iterate through the words1 array using a for..of loop, where if the word exists as a property in the hashmap add 1 to it, otherwise create a new property for it equal to 1
// Do the same for the words2 array
// Use a for..in loop to iterate through each property in the hash table
// If the property in the hash table is equal to 2, that means it occured once in both arrays, so add 1 to the count
// Return the count
