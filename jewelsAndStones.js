// LeetCode #771. Jewels and Stones
/* Instructions
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// Solution

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const numJewelsInStones = (jewels, stones) => {

    let count = 0

    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) != -1) {
            count++
        }
    }

    return count

}


// Leon's Solution
/*
 * function findJewels(jewels, stones) {
 *  const map = {}
 *  let count = 0
 *
 *  for (const jewel of jewels) {
 *      map[jewel] = true
 *
 *  }
 *
 *  for (const stone of stones) {
 *  if (map[stone]) {
 *          count++
 *      }
 *  }
 *
 * }
*/

// Explanation
// Declare a new variable named count that is set equal to 0
// Loop through eaach character in the stones string
// Check if the current character in the stones string can be found in the jewels string using the .indexOf() method
// The .indexOf() method will return -1 if it doesn't exist as any character in the jewels string
// So, if it doesn't return -1, we can add 1 to the count, because we know it appears in the jewels string
// Finally, return the count
