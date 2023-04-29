// LeetCode #1502. Can Make Arithmetic Progression From Sequence
/* Instructions
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

 

Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

 

Constraints:

    2 <= arr.length <= 1000
    -106 <= arr[i] <= 106


*/

// Solution (Brute Force)
var canMakeArithmeticProgression = function(arr) {
    let asc = Array.from(arr)
    let desc = Array.from(arr)

    asc.sort((a, b) => a - b)
    desc.sort((a, b) => b - a)

    let ascTemp = Math.abs(asc[0] - asc[1])
    let ascProgress = true

    let descTemp = Math.abs(desc[0] - desc[1])
    let descProgress = true

    for (let i = 0; i < asc.length - 1; i++) {
        if (Math.abs(asc[i] - asc[i + 1]) !== ascTemp) {
            ascProgress = false
        }
        if (Math.abs(desc[i] - desc[i + 1]) !== descTemp) {
            descProgress = false
        } 
    }

    if (ascProgress || descProgress) return true

    return false    
};

// Explanation
// Time complexity: O (n log n), loglinear complexity - due to the array .sort() method
// Create arrays of the given array in ascending or descending order (unsorted arrays will not be valid)
// Create temporary variables for what each iteration of the distance should match as by getting the first iteration for each array
// Loop through the length of the array and check if the progression matches, and if not, set that array's progression to false
// Then, if either of the arrays progression is true, return true
// Otherwise, return false

