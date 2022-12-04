// LeetCode #1550. Three Consecutive Odds
/* Instructions
 * Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
*/


// Solution
const threeConsecutiveOdds = arr => {
    let i = 0
    while (i < arr.length - 2) {
        if( (arr[i] % 2 !== 0) && (arr[i+1] % 2 !== 0) && (arr[i+2] % 2 !== 0) ) {
            return true
        }
        i++
    }
    return false
}

// Explanation
// Set the variable i equal to 0 to start the index at 0
// Use a while loop to check while the index is less than the length of the array - 2 because we want to check for 3 numbers
// if the indexes i, i+1, and i+2 have a modulus that isn't equal to 0, that means they are all odd so return true
// add i to the count after each loop
// return false at the end of the loop if otherwise
