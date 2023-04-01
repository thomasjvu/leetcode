// LeetCode #1046. Last Stone Weight 
/* Instructions
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

 

Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:

Input: stones = [1]
Output: 1

 

Constraints:

    1 <= stones.length <= 30
    1 <= stones[i] <= 1000

*/

// Solution
function lastStoneWeight(stones) {
    // edge case where there is only one stone
    if (stones.length == 1) return stones[0]
    
    // sort stones in descending order
    stones.sort((a, b) => b - a)

    // loop through each element in stones array
    for (let i = 0; i < stones.length - 1; i++) {
        // if there are 2 stones and they are equal, both are destroyed, so return 0
        if (stones.length == 2 && stones[0] === stones[1]) return 0
       
        // otherwise, if the largest 2 stones are equal, destroy both and reset i
        if (stones[i] == stones[i + 1]) {
            stones.splice(i, 2)
            i = -1
        } else {
            // otherwise, if the stones are not equal, set one stone equal to the difference
            // and remove the latter stone
            // resort the order of the stones
            // and reset the index
            stones[i] = stones[i] - stones[i+1]
            stones.splice(i+1, 1)
            stones.sort((a, b) => b - a)
            i = -1
        }
    }
    
    // only one stone will remain, so return that stone
    return stones[0]

}

// Explanation
// Time Complexity: O(n^2)
// A better solution for this would be to use heaps.
