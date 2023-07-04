// LeetCode #374. Guess Number Higher or Lower

/* Instructions
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6

Example 2:

Input: n = 1, pick = 1
Output: 1

Example 3:

Input: n = 2, pick = 1
Output: 1

 

Constraints:

    1 <= n <= 231 - 1
    1 <= pick <= n


*/

// Solution
const guessNumber = n => {
    for (let i = 1; i <= n; i++) {
        if (guess(i) === 0) {
            return i
        }
    }
}

// Explanation
// Loop through 1 to n.
// Check if the guess is correct for each number, and if it is, return that number.
