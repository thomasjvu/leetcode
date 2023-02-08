// LeetCode #2011. Final Value of Variable After Performing Operations
// Instructions
/* 
There is a programming language with only four operations and one variable X:

    ++X and X++ increments the value of the variable X by 1.
    --X and X-- decrements the value of the variable X by 1.

Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

// Clarifying Questions
// Will the operations in the array always be one of the valid operations?

// Solution
function finalValueAfterOperations(operations) {
    let X = 0

    for (let i = 0; i < operations.length; i++) {
        if ( operations[i] === "--X" || operations[i] === "X--" ) {
            X -= 1
        } else {
            X += 1
        }
    }
}

// Explanation
// We simply need to do a for-loop that checks if each element in the array is one of our operations,
// and if it is, we perform the increment or decrement to our variable X depending on the operation.
// To simplify it, we only need to check either the increment or decrement operations, and use else for
// the other operation, as we know that our operations in the array will always be valid and true.
