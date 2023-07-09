// LeetCode #2299. Strong Password Checker II
/* Instructions
A password is said to be strong if it satisfies all the following criteria:

    It has at least 8 characters.
    It contains at least one lowercase letter.
    It contains at least one uppercase letter.
    It contains at least one digit.
    It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
    It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).

Given a string password, return true if it is a strong password. Otherwise, return false.

 

Example 1:

Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.

Example 2:

Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

Example 3:

Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.

 

Constraints:

    1 <= password.length <= 100
    password consists of letters, digits, and special characters: "!@#$%^&*()-+".

*/

// Solution
const strongPasswordCheckerII = (password) => {

    // at least 8 characters
    if (password.length < 8) return false

    // contains 1+ lowercase letter
    const lowerRegex = /[a-z]/
    if (!lowerRegex.test(password)) return false

    // contains 1+ uppercase letter
    const upperRegex = /[A-Z]/
    if (!upperRegex.test(password)) return false

    // contains 1+ digit
    const digitRegex = /[0-9]/
    if (!digitRegex.test(password)) return false

    // contains 1+ special char
    const specialRegex = /[!@#$%^&*()\-\+]/
    if (!specialRegex.test(password)) return false

    // does not contain duplicate adjacent chars
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i+1]) return false
    }

    return true
    
};
