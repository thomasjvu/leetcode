// LeetCode #2574. Left and Right Sum Differences
/* Instructions
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

    answer.length == nums.length.
    answer[i] = |leftSum[i] - rightSum[i]|.

Where:

    leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
    rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.

Return the array answer.

 

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].

 

Constraints:

    1 <= nums.length <= 1000
    1 <= nums[i] <= 105

*/

// Solution
const leftRightDifference = (nums) => {
    // create empty arrays
    let answer = [];
    let leftSum = [];
    let rightSum = [];

    // loop through nums array
    for (let i = 0; i < nums.length; i++) {
        // add each left sum iteration to leftSum array
        let tempLeft = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        leftSum.push(tempLeft);

        // add each right sum iteration to rightSum array
        let tempRight = nums
            .slice(i + 1, nums.length)
            .reduce((acc, curr) => acc + curr, 0);
        rightSum.push(tempRight);

        // push absolute value of leftsum - rightsum iteration to answer array
        answer.push(Math.abs(leftSum[i] - rightSum[i]));
    }

    // return answer array
    return answer;
};
