// 20. Valid Parentheses
/* Instructions
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/


// Solution
const isValid = s => {
    if (s.length === 0) { // if the string is empty, it would be true
        return true
    } else if (s.length < 2) { // if the string is 1 element, it would auto be false
        return false
    }

    const brackets = { // create an object of bracket key:value pairs
        '{': '}', // Key value pair
        '(': ')', // Key value pair
        '[': ']', // Key value pair
    }

    let stack = [] // create a stack (LIFO) array
    let arr = s.split('') // create an array of the given string argument

    for (let i = 0; i < arr.length; i++) { // Loop through eaach element in array
        if(brackets[arr[i]]) { // If array value is in the brackets object, push it into the stack
            stack.push(arr[i])
        } else { // Or else, (if array value is not in the brackets object)
            let chkBr = stack.pop(); // create a variable that grabs the last element in the stack
            if(pairBrkts[chkBr] !== arr[i]) { // If the last element in the stack is not equal to the array element
                return false // return false
            }
        }
    }

    if(stack.length > 0) { // If the stack has any remaining elements that didn't go into the above else statement
        return false // return false
    }

    return true // Or else, return true
}

// Refactored

// const isValid = s => {

//     let bracket = { // Create an Object
//         '(':')', // Key value pair for parentheses
//         '[':']', // Key value pair for square brackets
//         '{':'}', // Key value pair for curly braces
//     }

//     let stack = [] // Stack is "Last in, First out" (LIFO)


//     for (let char of s) {
//         if(bracket[char]) {
//             stack.push(bracket[char])
//         } else {
//             if(stack.pop() !== char) return false
//         }
//     }

//     return (!arr.length) // if 0, return false. 

// }
