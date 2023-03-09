// LeetCode #500. Keyboard Row
/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:

Input: words = ["omk"]
Output: []

Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

 

Constraints:

    1 <= words.length <= 20
    1 <= words[i].length <= 100
    words[i] consists of English letters (both lowercase and uppercase). 
*/

// Solution
const findWords = (words) => {

    // create new set objects containing each keyboard row's respective characters
    let row1 = new Set("qwertyuiop")
    let row2 = new Set("asdfghjkl")
    let row3 = new Set("zxcvbnm")
    
    let res = []

    // loop through each word of the word
    for (const word of words) {
        // if the word returns true when being compared with the canbetyped function
        if ( canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3) ) {
            // push it to the result array
            res.push(word)
        }
    }

    // create function that checks if each character in the word is within a row
    function canBeTyped(word, row) {
       // loop through each character of the word
       for (const char of word) {
           // check if each char in the word is contained in the row, if not, return false
           if (!row.has(char.toLowerCase())) return false;
       }
       // otherwise, return true
       return true;
    }

    // return the result array
    return res

};
