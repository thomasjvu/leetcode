// LeetCode #2619. Array Prototype Last
/* Instructions
* Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

 

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

 

Constraints:

    0 <= arr.length <= 1000
    0 <= arr[i] <= 1000
*/

// Solution
Array.prototype.last = function() {
    return this[this.length-1] ?? 1
}

// Explanation
// The code adds a new method, `last()` to the `Array` prototype.
// The `function()` is an anonymous function that is defined and assigned to the `last` method of the `Array.prototype` object.
// The function returns the last element of the array using the index `this.length-1`. 
// The `this` keyword is used to refer to the current array instance on which the method is called.
// The `??` is the nullish coalescing operation, which returns the right-hand side operand when the left-hand side operand is `null` or `undefined`.
// In this case, when there is no last element of the array, -1 will be returned as `null` or `undefined`
