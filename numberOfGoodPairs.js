// LeetCode #1512. Number of Good Pairs
/* Instructions
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

// Solution
const numIdenticalPairs = nums => {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
    }
    return count
}

// Explanation
// Instantiate a number variable set equal to 0 to hold the count
// Use a nested for loop to iterate through each pair of numbers by setting i = 0 and j = i+1
// Use an if-statement to check if the elements being iterated through are equal to each other, and if so, add 1 to the count
// At the end of the nested loop, return the count
