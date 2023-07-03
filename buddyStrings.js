// LeetCode #859. Buddy Strings
/* Instructions
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

    For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

 

Constraints:

    1 <= s.length, goal.length <= 2 * 104
    s and goal consist of lowercase letters.

*/

// Solution (Brute Force, Times Out on Large Datasets)
// var buddyStrings = function(s, goal) {

//     s = s.split('');

//     // nested for loop to go through i and j
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             let temp = s.slice();
//             let tempI = s[i];
//             let tempJ = s[j];
//             temp[i] = tempJ;
//             temp[j] = tempI;
//             if (temp.join('') === goal) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };


// Solution
const buddyStrings = (s, goal) => {
    if (s.length !== goal.length) {
        return false
    }

    if (s === goal) {
        // check if there are any duplicate characters in s
        let set = new Set()
        for (let char of s) {
            if (set.has(char)) {
                return true;
            }
            set.add(char)
        }
        return false
    }

    let differences = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            differences.push(i)
        }
    }

    if (differences.length !== 2) {
        return false
    }

    let [i, j] = differences

    return s[i] === goal[j] && s[j] === goal[i]
}

// Explanation
// If the lengths of s and goal are different, we know that we can't swap two letters to make them equal, so return false
// If `s` is already equal to `goal`, we need to check if there are any duplicate characters in `s`. If there are duplicates, we can swap two occurrences of the same character to make the strings equal, so return `true` otherwise `false`.
// Next, create an array called `differences` to keep track of indices where `s` and `goal` differ. If the length of `differences` is not exactly 2, we can't swap to letters to make it equal, so return false
// If the length of differences is 2, we retrieve the two differing indices (`i` and `j`). We check if swapping the characters at these indicides results in making `s` equal to `goal`. If so, return `true`, otherwise `false`.
// This solution has a time complexity of O(n), Linear Time, where n is the length of the input strings `s` and `goal`.
