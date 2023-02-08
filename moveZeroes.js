// LeetCode #283. Move Zeroes
/* Instructions
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/

// Solution
function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

// Explanation
// Initialize a pointer to keep track of the next position to put non-zero element, nonZeroIndex
// Traverse the array using a for..loop
// If the current element is not zero, put it at the next position and increment the non-zero pointer
// Then, traverse the array again and fill the rest with zeros
// Return the modified array


// Notes
// The 'nonZeroIndex' pointer keeps track of the next available position in the array to put a non-zero element
// The 'if' statement checks if the current element `nums[i]` is not zero. If it's not zero, we put it in the next
// available position `nums[nonZeroIndex]`, and then increment the `nonZeroIndex` pointer by one.
// The second `for` loop is used to fill the rest of the array with zeroes after all the non-zero elements have been placed in their respective positions
// It starts from the `nonZeroIndex` pointer, which points to the end of the non-zero elements, and continues to fill the rest of the array with zeros until the end of the array
// This algorithm is known as the two-pointer technique, which is good when working with arrays. 
