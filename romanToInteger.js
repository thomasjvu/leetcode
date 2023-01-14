// LeetCode #13. Roman to Integer
/* Instructions
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



// Solution

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i + 1] === 'V') {
            value += 4;
            i++;
        } else if (s[i] === 'I' && s[i + 1] === 'X') {
            value += 9;
            i++;
        } else if (s[i] === 'X' && s[i + 1] === 'L') {
            value += 40;
            i++;
        } else if (s[i] === 'X' && s[i + 1] === 'C') {
            value += 90;
            i++;
        } else if (s[i] === 'C' && s[i + 1] === 'D') {
            value += 400;
            i++;
        } else if (s[i] === 'C' && s[i + 1] === 'M') {
            value += 900;
            i++;
        } else if (s[i] === 'I') {
            value += 1;
        } else if (s[i] === 'V') {
            value += 5;
        } else if (s[i] === 'X') {
            value += 10;
        } else if (s[i] === 'L') {
            value += 50;
        } else if (s[i] === 'C') {
            value += 100;
        } else if (s[i] === 'D') {
            value += 500;
        } else if (s[i] === 'M') {
            value += 1000;
        }
    }
    return value;
};

// Explanation
// Instantiate a new number variable to hold our value
// Loop through each element in the array 
// First, check the "placed before" values.
// If there's a placed before value, increment the index in that same condition
// Otherwise, add the normal roman numeral vowels
// At the end, return the value
