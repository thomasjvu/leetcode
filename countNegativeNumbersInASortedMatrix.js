// LeetCode #1351. Count Negative Numbers in a Sorted Matrix
/* Instructions
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 100
    -100 <= grid[i][j] <= 100

 
Follow up: Could you find an O(n + m) solution?
*/

// Solution
const countNegatives = (grid) => grid.flat().filter(el => el < 0).length

// Explanation
// Use the .flat() method to flatten the matrix into an array
// Use the .filter() method to filter each item out, leaving only those less than 0
// Return the .length property of the resulting array, which will give the negative number count
