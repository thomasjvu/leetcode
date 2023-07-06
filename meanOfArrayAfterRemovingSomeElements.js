// LeetCode #1619. Mean of Array After Removing Some Elements
/* Instructions
Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

 

Example 1:

Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

Example 2:

Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
Output: 4.00000

Example 3:

Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
Output: 4.77778

 

Constraints:

    20 <= arr.length <= 1000
    arr.length is a multiple of 20.
    0 <= arr[i] <= 105
*/

// Solution
const trimMean = (arr) => {
    // sort array in ascending order
    arr = arr.sort((a, b) => a - b);

    // get five percent of elements by dividing the length by 20
    let fivePercent = arr.length / 20;

    // remove five percent from the left and five percent from the right
    arr.splice(0, fivePercent);
    arr.splice(arr.length - fivePercent, arr.length);

    // instantiate a new variable for the new length of the array
    let length = arr.length;

    // sum all the elements left together and divide them by the new length and return that answer (the mean)
    let sum = arr.reduce((a, b) => a + b, 0);
    let mean = sum / length;

    return mean;
};
