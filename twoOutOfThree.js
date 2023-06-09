// LeetCode #2032. Two Out of Three
/* Instructions
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

 

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.

 

Constraints:

    1 <= nums1.length, nums2.length, nums3.length <= 100
    1 <= nums1[i], nums2[j], nums3[k] <= 100

 */

// Solution
const twoOutOfThree = (nums1, nums2, nums3) => {

    // initialize empty array for distinct values in 2/3 arrays
    let distinct = []

    // get unique values from each array
    let uniqueNums1 = Array.from(new Set([...nums1]))
    let uniqueNums2 = Array.from(new Set([...nums2]))
    let uniqueNums3 = Array.from(new Set([...nums3]))

    // create a set of all of the seen values, initializing it with the first unique array
    let seen = new Set([...uniqueNums1])

    // loop through each other unique array
    // and check for distinct numbers that have already been seen
    for (let i = 0; i < uniqueNums2.length; i++) {
        // if already seen and not already in the distinct array, add it to the distinct array
        if ( seen.has(uniqueNums2[i]) && !distinct.includes(uniqueNums2[i]) ) {
            distinct.push(uniqueNums2[i])
        // otherwise, add it to the seen set
        } else {
            seen.add(uniqueNums2[i])
        }
    }

    for (let i = 0; i < uniqueNums3.length; i++) {
        if ( seen.has(uniqueNums3[i]) && !distinct.includes(uniqueNums3[i]) ) {
            distinct.push(uniqueNums3[i])
        } else {
            seen.add(uniqueNums3[i])
        }
    }

    // return filled out distinct array with values in 2/3 given arrays
    return distinct
}
