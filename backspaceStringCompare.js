// LeetCode #844. Backspace String Compare
/* Instructions
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

 

Constraints:

    1 <= s.length, t.length <= 200
    s and t only contain lowercase letters and '#' characters.

 

Follow up: Can you solve it in O(n) time and O(1) space?
*/


// Solution
const backspaceCompare = (s, t) => {

    let arrS = []
    let arrT = []

    for (const char of s) {
        if (char !== '#') {
            arrS.push(char)
        } else {
            arrS.pop()
        }
    }

    for (const char of t) {
        if (char !== '#') {
            arrT.push(char)
        } else {
            arrT.pop()
        }
    }

    return (arrS.join('') === arrT.join('')) ? true : false

}

// Explanation
// Instantiate 2 new arrays to hold the s characters and t characters, respectively
// Loop through each character of s, and if it isn't equal to '#', then add it to the array, and if it is, pop the last character from the array
// Loop through each character of t, and if it isn't equal to '#', then add it to the array, and if it is, pop the last character from the array
// Then, return a ternary that checks if arrS and arrT are equal to one another. If they are, return true, otherwise, return false
