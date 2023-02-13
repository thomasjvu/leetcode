// LeetCode #1394. Find Lucky Integer in an Array
/* Instructions
 * Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/

// Pseudocode
// We are given an array of integers
// A lucky integer is one whose frequency is equal to the value
// We can create a hashmap to get a property-value pair for each frequency
// The length of the array will always be greater than 1.
// If there is no lucky integer, return -1
// Otherwise, return the lucky integer


// Solution
function findLucky(arr) {
    const map = {}

    for (const num of arr) {
        map[num] = map[num] + 1 || 1
    }

    let largestLucky = -1

    for (const key in map) {
        if (Number(key) === map[key] && map[key] > largestLucky) {
            largestLucky = map[key]
        }
    }

    return largestLucky
}

// Explanation
// Instantiate an empty object {}, map
// Loop through each item in the array, and map the frequencies using a hashmap algorithm
// Instantiate a number variable, largestLucky, and set the default to -1, which will be returned if there is no largestLucky
// Then, loop through each key in the map
// If the key in the map is equal to the value, and if it is greater than -1 (the current largestLucky), then set that value equal to largestLucky
// At the end, return largestLucky
