// LeetCode #28. Find the Index of the First Occurence in a String
/* Instructions
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

 

Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.

*/

// Solution
const strStr = (hayStack, needle) => hayStack.indexOf(needle)

// Explanation
// Use the .indexOf() method to find the first occuring index of a substring in a string
// If found, it will return the beginning index of the substring
// If not found, it will return -1
