// LeetCode #349. Intersection of Two Arrays
/* Instructions
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000

*/

// Solution
const intersection = (nums1, nums2) => {
    let intersection = []

    for (let i = 0; i < nums1.length; i++) {
        if ( nums2.includes(nums1[i]) && !intersection.includes(nums1[i]) ) {
            intersection.push(nums1[i])
        }
    }

    return intersection
}

// Explanation
// Instantiate an empty array variable
// Loop through each element in either array
// Check if the opposing array contains the current element being iterated on, and check if the intersection doesn't already have that element in the array
// If so, push that currently iterated element onto the array
// At the end of all iterations, return the intersection array
