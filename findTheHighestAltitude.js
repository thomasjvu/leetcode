// LeetCode #1732. Find the Highest Altitude
/* Instructions
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

 

Constraints:

    n == gain.length
    1 <= n <= 100
    -100 <= gain[i] <= 100
*/



// Solution
const largestAltitude = gain => {

    let altitudes = [0]

    for (let i = 1; i <= gain.length; i++) {
        altitudes[i] = altitudes[i-1] + gain[i-1]
    }

    return Math.max(...altitudes)
}

// Explanation
// Instantiate a new array to hold the altitudes, with an initial element that starts at 0 which is always the starting altitude.
// Use a for loop starting at index 1 that increments until it reaches the length of the gains array
// For each iteration, set the current index for the altitudes array equal to the previous element in the array + the previous element of the gains array.
// This will eventually give us a filled out array of all the altitudes
// Return the max value in the altitude array using the Math.max method along with the spread operator.
