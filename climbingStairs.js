// LeetCode #70. Climbing Stairs
/* Instructions
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45
*/

// Solution
const climbStairs = n => {
    let first = 0
    let second = 1
    let temp;
    let i = 0;

    while (i < n) {
        temp = first + second
        first = second
        second = temp
        i++
    }

    return second
}

// Explanation
// Declare a variable, first, set equal to 0
// Declare a variable, second, set equal to 1
// Declare an empty number variable, temp
// Declare our loop counter, i, set equal to 0
// Use a while loop to loop through every iteration where i < n
// For each iteration, set temp equal to first + second
// Then, set first equal to second
// Then, set second equal to temp
// Increment i by 1
// At the end of the loop, second will be the number of different ways to climb the stairs
