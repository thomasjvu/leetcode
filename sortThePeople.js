// LeetCode #2418. Sort the People
/* Instructions
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/

// Solution
const sortPeople = (names, heights) => {

    let output = []
    
    for (let i = 0; i < heights.length; i++) {
        output.push( {name: names[i], height: heights[i]} )
    }

    return output.sort((a, b) => b.height - a.height).map(i => i.name)
}

// Explanation
// Create an empty array, output
// Iterate the same number of times as there are elements in the names or heights array
// For each iteration, push an object that contains the name and height of the current index of each corresponding array
// Then, return the output array sorted in descending order based on height, and then mapping the array to only contain the name property of each index
