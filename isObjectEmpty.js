// LeetCode #2727. Is Object Empty
/* Instructions
Given an object or an array, return if it is empty.

    An empty object contains no key-value pairs.
    An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.

 

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.

 

Constraints:

     2 <= JSON.stringify(obj).length <= 105

 
Can you solve it in O(1) time?
*/

const isEmpty = obj => {

    // Check if Array
    if (Array.isArray(obj)) {
        return obj.length === 0
    }

    // Check if Object
    else if (typeof obj === 'object') {
        return Object.keys(obj.length) === 0;
    }

    // Handle other cases (e.g., obj is a string, number, etc.)
    return false
}
