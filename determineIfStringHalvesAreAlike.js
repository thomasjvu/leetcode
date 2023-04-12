// LeetCode #1704. Determine if String Halves Are Alike
/* Instructions
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

 

Constraints:

    2 <= s.length <= 1000
    s.length is even.
    s consists of uppercase and lowercase letters.

*/

// Solution
const halvesAreAlike = (s) => {

    // create new variables for left and right halves of the string
    let left = s.slice(0, (s.length/2)).toUpperCase()
    let right = s.slice((s.length/2), s.length).toUpperCase()

    // create new variables for the count of vowels in each halve of the string
    let leftVowels = 0
    let rightVowels = 0

    // loop through length of either halve, and check for uppercase vowel
    // if character is uppercase vowel, incremenet respective vowel count
    for (let i = 0; i < left.length; i++) {
        if (left[i] === 'A' || left[i] === 'E' || left[i] === 'I' || left[i] === 'O' || left[i] === 'U') {
            leftVowels++
        }
        if (right[i] === 'A' || right[i] === 'E' || right[i] === 'I' || right[i] === 'O' || right[i] === 'U') {
            rightVowels++
        }
    }

    // return true if vowel coutns are the same value, otherwise false
    return (leftVowels === rightVowels)

}
