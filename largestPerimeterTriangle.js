// LeetCode #976. Largest Perimeter Triangle
/* Instructions
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

 

Constraints:

    3 <= nums.length <= 104
    1 <= nums[i] <= 106

*/

// Solution
const largestPerimeter = (nums) => {
    // Triangle Inequality: when two sides are less than the third side
    
    // Sort the array in descending order
    nums.sort((a, b) => b - a)

    // loop through array, and check if each iteration is a valid triangle, if it is, return its perimeter immediately as it will be the largest
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i]
        let b = nums[i+1]
        let c = nums[i+2]

        // return largest perimeter triangle
        if (a < b + c) return a + b + c
    }

    // return 0 if no valid triangles exist
    return 0
}

// Explanation
// Time Complexity: O(n log n), the JavaScript .sort() method is O(n log n)
