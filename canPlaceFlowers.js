// LeetCode #605. Can Place Flowers
/* Instructions
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

 

Constraints:

    1 <= flowerbed.length <= 2 * 104
    flowerbed[i] is 0 or 1.
    There are no two adjacent flowers in flowerbed.
    0 <= n <= flowerbed.length

*/

// Solution
const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
        if (
            flowerbed[i] === 0 &&
            flowerbed[i - 1] !== 1 &&
            flowerbed[i + 1] !== 1
        ) {
            n--
            i++
        }
    }
    return n === 0
}

// Explanation
// Loop through the flowerbed array as long as i is less than the length and n is not equal to 0
// If the element at the current index is 0, and the previous element isn't 1, and the next index isn't 1, then...
// decrement n by 1
// increment i by 1
// Then, by the end of the loop, return n === 0, which will return either true or false
