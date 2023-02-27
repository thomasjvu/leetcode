// LeetCode #557. Reverse Words in a String III
/* Instructions
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/

// Solution
const reverseWords = s => {
    s = s.split(' ')
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse('').join('')
    }
    return s.join(' ')
}

// Explanation
// Split the given string into an array, using a space as our splitter
// Loop through each element in the newly split array
// For each element (which will be a string), split it into an array, reverse it, then join it back together
// Finally, return the array joined back together as a string, using a space as the joiner
