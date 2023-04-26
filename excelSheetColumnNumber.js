// LeetCode #171. Excel Sheet Column Number
/* Instructions
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

 

Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701

 

Constraints:

    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].

*/

// Solution
function titleToNumber(columnTitle) {
    // declare and initialize variable result to 0
    let result = 0
    // declare and initialize length to the length of the given string
    let length = columnTitle.length

    // loop through the length of the string
    for (let i = 0; i < length; i++) {
        // for each character, calculate its corresponding value by subtracting the ASCII code of 'A' (65) from the current character and adding 1 (so subtract 64)
        // then multiply that value by 26 raised to the power of `length - (i + 1)`, which represents the current character in the title
        // ...and add that value to the result
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1))
    }

    return result
}

// Time Complexity: O(n)
