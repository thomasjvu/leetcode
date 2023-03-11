// LeetCode #1346. Check If N and Its Double Exist
/* Instructions
Given an array arr of integers, check if there exist two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

 

Constraints:

    2 <= arr.length <= 500
    -103 <= arr[i] <= 103

*/

// Solution
const checkIfExist = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] * 2 || arr[j] === arr[i] * 2) {
                return true
            }
        }
    }

    return false
}

// Explanation
// Use a nested for loop to iterate through each element of the array by the number of elements
// For each iteration, check if the element at i is equal to 2x the element j, or vice-versa
// If at any iteration that is true, return true
// Otherwise, return false after the loop ends
