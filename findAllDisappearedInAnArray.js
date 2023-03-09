// LeetCode #448. Find All Numbers Disappeared in an Array
/* Instructions
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

 

Constraints:

    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n

 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

*/

// Solution
const findDisappearedNumbers = (nums) => {
    let disappeared = [] 
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            disappeared.push(i)
        }
    }

    return disappeared
};

// Explanation
// Instantiate an empty array to hold a list of the disappeared numbers
// Use a for loop to loop through every number from 1 to the length of the nums array
// Check if the current number exists in the nums array by using the .indexOf() method
// If it doesn't exist, the .indexOf() method will return -1, so push that number, i, to the disappeared array
// Finally, return the disappeared array
