// LeetCode #412. FizzBuzz
/* Instructions
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104
*/

// Solution
const fizzBuzz = n => {
    let answer = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz")
        } else if (i % 3 === 0) {
            answer.push("Fizz")
        } else if (i % 5 === 0) {
            answer.push("Buzz")
        } else {
            answer.push(String(i))
        }
    }
    return answer
}

// Explanation
// Instantiate an empty array to hold the strings
// Loop through each number from 1 to the given number (n)
// Use modulus to check divisibility for each iteration, and push the related string if related
// If it is not divisible by any of the listed conditions for Fizzbuzz, push the current index as a string
// Return the answer array
