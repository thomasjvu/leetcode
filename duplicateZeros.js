// LeetCode #1089. Duplicate Zeroes
/* Instructions
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

 

Constraints:

    1 <= arr.length <= 104
    0 <= arr[i] <= 9

*/

// Solution
function duplicateZeroes (arr) {
    // capture initial array length
    let len = arr.length
    // loop through array length
    for (let i = 0; i < len; i++) {
        // if iterated element is 0
        if (arr[i] === 0) {
            // add 0 to the element
            arr.splice(i, 0, 0)
            // remove the last element to keep the same length
            arr.pop()
            // increment the index
            i++
        }
    }
}
