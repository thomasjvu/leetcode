// LeetCode #2335. Minimum Amount of Time to Fill Cups
/* Instructions
You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

 

Example 1:

Input: amount = [1,4,2]
Output: 4
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup and a warm cup.
Second 2: Fill up a warm cup and a hot cup.
Second 3: Fill up a warm cup and a hot cup.
Second 4: Fill up a warm cup.
It can be proven that 4 is the minimum number of seconds needed.

Example 2:

Input: amount = [5,4,4]
Output: 7
Explanation: One way to fill up the cups is:
Second 1: Fill up a cold cup, and a hot cup.
Second 2: Fill up a cold cup, and a warm cup.
Second 3: Fill up a cold cup, and a warm cup.
Second 4: Fill up a warm cup, and a hot cup.
Second 5: Fill up a cold cup, and a hot cup.
Second 6: Fill up a cold cup, and a warm cup.
Second 7: Fill up a hot cup.

Example 3:

Input: amount = [5,0,0]
Output: 5
Explanation: Every second, we fill up a cold cup.

*/

// Solution
const fillCups = (amount) => {
    
    // init vars
    let total = amount.reduce((a, b) => a + b, 0) // total number of cups
    let max = 0

    // loop through the array (length 3)
    // for each iteration, set the max variable either to the max of the different cup types
    for (let i = 0; i < amount.length; i++) {
        max = Math.max(max, amount[i])
    }    

    // if max cups is greater than or equal to the sum of remaining two smaller cups
    // then max cups will cover all number of seconds needed
    if (max >= total - max) return max

    // otherwise, the max fill time will be the total # of cups / 2, rounded up
    return Math.ceil(total / 2)

};
