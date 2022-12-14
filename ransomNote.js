// LeetCode # Ransom Note
/* Instructions
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 

Constraints:

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.
*/




// Solution
const canConstruct = (ransomNote, Magazine) => {
    let magazineHash = {}

    for (const letter of Magazine) {
        magazineHash[letter] = magazineHash[letter] + 1 || 1
    }

    for (const letter of ransomNote) {
        if(magazineHash[letter]) {
            magazineHash[letter]--
            if(magazineHash[letter] < 0) return false
        } else {
            return false
        }
    }
    return true
}


// Explanation
// Declare an empty object to hold the hash of letters in our Magazine
// Use a for..of loop to fill out the count of each letter in the magazine
// Use a for..of loop to check if each letter needed for the ransomNote is contained in our magazineHash
// For each iteration, if it exists, subtract 1 from the value of the magazine hash for that property
// If the property value ever goes less than 0 or doesn't even exist, return false
// Otherwise at the end of the loop, return true
