// LeetCode #1844. Replace All Digits with Characters
/* Instructions
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

    For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.

For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

 

Example 1:

Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Example 2:

Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'

 

Constraints:

    1 <= s.length <= 100
    s consists only of lowercase English letters and digits.
    shift(s[i-1], s[i]) <= 'z' for all odd indices i.

*/

// Solution
const replaceDigits = (s) => {

    let replaced = []

    // odd indexes will be replaced
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            // replace element at odd index with new character by taking account charactercode at previous character and the number at the current index
            let temp = String.fromCharCode( s.charCodeAt(i-1) + Number(s[i]))
            // push it onto the replaced array
            replaced.push(temp)
        } else {
            // push it onto the replaced array
            replaced.push(s[i])
        }
    }

    // return the replaced array joined ttogether as a single consecutive string
    return replaced.join('')
}
