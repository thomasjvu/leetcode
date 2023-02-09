// LeetCode #575. Distribute Candies
/* Instructions
 * Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

 

Example 1:

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Example 2:

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Example 3:

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

 

Constraints:

    n == candyType.length
    2 <= n <= 104
    n is even.
    -105 <= candyType[i] <= 105
*/

// Solution
function distributeCandies(candyType) {
    let map = {}
    for (const type of candyType) {
        map[type] = map[type] + 1 || 1
    }

    let unique = 0
    const length = candyType.length

    for (const key in map) {
        unique++
    }

    return (unique < length / 2) ? unique : length / 2
}

// Explanation
// Instantiate an empty object {}, map
// Loop through each element in the candyType array to fill the hashmap
// Declare a number variable, unique, and set it equal to 0
// For each key in the map, increment the unique variable by 1
// Then, use a ternary to check if the number of unique is less than the length / 2
// If it is, return unique
// Otherwise, return length / 2
