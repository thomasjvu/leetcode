// LeetCode #2129. Capitalize The Title
/* Instructions
 * You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

    If the length of the word is 1 or 2 letters, change all letters to lowercase.
    Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

Return the capitalized title.

 

Example 1:

Input: title = "capiTalIze tHe titLe"
Output: "Capitalize The Title"
Explanation:
Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

Example 2:

Input: title = "First leTTeR of EACH Word"
Output: "First Letter of Each Word"
Explanation:
The word "of" has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

Example 3:

Input: title = "i lOve leetcode"
Output: "i Love Leetcode"
Explanation:
The word "i" has length 1, so it is lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

 

Constraints:

    1 <= title.length <= 100
    title consists of words separated by a single space without any leading or trailing spaces.
    Each word consists of uppercase and lowercase English letters and is non-empty.

*/


// Solution 
const capitalizeTitle = title => {
    title = title.toLowerCase().split(' ')
    let newTitle = []

    for (let i = 0; i < title.length; i++) {
        let iLength = title[i].length
        if (iLength <= 2) {
            newTitle.push(title[i])
        } else {
            newTitle.push( title[i][0].toUpperCase() + title[i].slice(1, iLength) )
        }
    }

    return newTitle.join(' ')
}

// Explanation
// Set the title to its lowercase equivalent using the .toLowerCase() method and splitting each word into an individual array element
// Declare a newTitle variable to hold our redone title
// Declare a iLength variable which will be equal to the length of each individual element of the array
// Loop through every element in the title array, and check if the length is less than 2
// If it is elss than 2, push the element into the new array as it is (because we already set it to .toLowerCase())
// Else, push the value where the first element of that array item has the .toUpperCase() method applied to it, and also...
// Concatenate the rest of the string (2, iLength) to that single capitalized letter
// Return the newTitle joined together as a string.
