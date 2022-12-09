// LeetCode #1207. Unique Number of Occurences
/* Instructions
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

 

Constraints:

    1 <= arr.length <= 1000
    -1000 <= arr[i] <= 1000
*/

// Solution
const uniqueOccurences = arr => {
    let map = {}
    for (const el of arr) {
        map[el] = map[el] + 1 || 1
    }

    let mapArr = Object.values(map)
    return mapArr.length === new Set(mapArr).size
}

// Explanation
// Create a new hash table
// Add each element in the array as a property.count into the map object
// Get all of the values in the map as an array using the `Object.values()` method
// If the length of that array is equal to the size of the array with unique values (set), then it will return true
// Otherwise, the return statement will return false
