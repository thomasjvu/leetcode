// LeetCode #1287. Element Appearing More Than 25% In Sorted Array
/* Instructions
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:

Input: arr = [1,1]
Output: 1

 

Constraints:

    1 <= arr.length <= 104
    0 <= arr[i] <= 105

*/

// Solution
const findSpecialInteger = arr => {

    // init vars
    let length = arr.length
    let map = {}

    // fill out hashmap
    for (const num of arr) {
        map[num] = map[num] + 1 || 1
    }

    // iterate through map
    for (const key in map) {
        // if key occurs more than 25% of time, return it
        if (map[key] > length/4) return key
    }
}
