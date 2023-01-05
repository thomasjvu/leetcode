// LeetCode #242. Valid Anagram
/* Instructions
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

// Solution
/*
const isAnagram = (s, t) => {
    const map1 = {}
    const map2 = {}

    for (char of s) {
        map1[char] = map1[char] + 1 || 1
    }

    for (char of t) {
        map2[char] = map2[char] + 1 || 1
    }

    for (key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }

    for (key in map2) {
        if (map2[key] !== map1[key]) {
            return false
        }
    }

    return true
}
*/

// Explanation
// Initiate 2 empty map objects, one for every letter of s, and one for every letter of t
// Iterate through both s and t, and create a map of each element, adding 1 to the key-value pair if it already exists, or setting it equal to 1 if it doesn't
// Then, loop through each key in map1, and if its value isn't equal to that of map2 with the same key, return false
// Then, loop through each key in map2, and if its value isn't equal to that of map1 with the same key, return false
// Otherwise, that means s and t are valid anagrams, in which case we return true

// Another Solution
const isAnagram = (s, t) => {
    // If the lengths of the strings are different, they cannot be anagrams
    if (s.length !== t.length) return false;

    // Create an object to store the frequency of each character
    const frequency = {};

    // Loop through the characters in s and t
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]; // The character in s
        const tChar = t[i]; // The character in t

        // If the character exists in the frequency object, increment its count
        if (frequency[sChar]) {
            frequency[sChar]++;
        } else {
            frequency[sChar] = 1;
        }

        // If the character exists in the frequency object, decrement its count
        if (frequency[tChar]) {
            frequency[tChar]--;
        } else {
            frequency[tChar] = -1;
        }
    }

    return Object.values(frequency).every(count => count === 0)
};
