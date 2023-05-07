// LeetCode #345. Reverse Vowels of a String
/* Instructions

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"

 

Constraints:

    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.

*/

// Solution
const reverseVowels = (s) => {

    // declare array of vowels
    let vowels = ["a", "A", "e", "E", "i", 'I', 'o', 'O', 'u', 'U']

    // check if string does not include any of the vowels in the array, if so, return the string as is
    if (!vowels.some(vowel => s.includes(vowel))) return s

    // use regex pattern to match all vowels
    let regex = /[aeiou]+/ig

    // get an array of all the vowels in reverse order
    let reverseVowels = s.match(regex).join('').split('').reverse()

    // instantiate the index of the reverseVowels Array
    let reverseVowelsIndex = 0

    // instantiate an empty string
    let reverseStr = ''

    // loop through original string
    for (let i = 0; i < s.length; i++) {
        // if element at current iteration is not a vowel, concatenate it to the reverseStr variable
        if (!vowels.includes(s[i])) {
            reverseStr += `${s[i]}`
        // else, the element is a vowel and the current reverseVowelsIndex of the reverseVowels array is concatenated
        } else {
            reverseStr += `${reverseVowels[reverseVowelsIndex]}`
            // increment reverseVowelsIndex
            reverseVowelsIndex++
        }
    }

    return reverseStr
}
