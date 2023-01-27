// LeetCode #1455. Check if a word occurs as a prefix of any word in a sentence
/* Instructions
 * Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string s is any leading contiguous substring of s.

 

Example 1:

Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

Example 2:

Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

Example 3:

Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.
*/


// Solution
const isPrefixOfWord = (sentence, searchWord) => {
    let arr = sentence.split(' ')

    for (let i = 0; i < arr.length; i++) {
        if ( arr[i].startsWith(searchWord) ) {
            return i + 1
        }
    }

    return -1
}

// Explanation
// Break up the sentence into a new array using the .split(' ') method, which will break each word up with the space delimiter
// Loop through each element in the array using a for-loop
// Because we are told to do 1-index, return i+1 if an element of the array .startsWith() our searchWord
// Otherwise, return -1 when the loop is completed if none of the loops satisfy the .startsWith() condition
