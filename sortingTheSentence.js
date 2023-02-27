// LeetCode #1859. Sorting the Sentence
/* Instructions
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

    For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

 

Constraints:

    2 <= s.length <= 200
    s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
    The number of words in s is between 1 and 9.
    The words in s are separated by a single space.
    s contains no leading or trailing spaces.
*/

// Solution
const sortSentence = s => {
    s = s.split(' ')
    let arr = []

    for (let i = 0; i < s.length; i++) {
        if (s[i].includes('1')) {
            arr[0] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('2')) {
            arr[1] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('3')) {
            arr[2] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('4')) {
            arr[3] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('5')) {
            arr[4] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('6')) {
            arr[5] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('7')) {
            arr[6] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('8')) {
            arr[7] = s[i].slice(0, s[i].length-1)
        } else if (s[i].includes('9')) {
            arr[8] = s[i].slice(0, s[i].length-1)
        }

        return arr.join(' ')
    }
}

// Explanation
// Split the given shuffled string into an array
// Instantiate an empty array variable to hold our new sentence, []
// Loop though each item in the shuffled string array, and if it contains a certain number, make that element the index of the new array -1
// Also, slice everything except the last character of the element of each index to be added to the array
// Return the new array joined together
