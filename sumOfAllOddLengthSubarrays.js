// LeetCode #1588. Sum of All Odd Length Subarrays
/* Instructions
 Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

Example 3:

Input: arr = [10,11,12]
Output: 66

 

Constraints:

    1 <= arr.length <= 100
    1 <= arr[i] <= 1000

 

Follow up:

Could you solve this problem in O(n) time complexity?

*/

// Solution
const sumOddLengthSubarrays = (arr) => {
    let sum = 0
    let length = arr.length

    // iterate through each element and compute the number of odd-length subarrays that include that element
    // then, add up the product of each element's value and the count of its odd-length subarrays to get the total sum
    for (let i = 0; i < length; i++) {
        let start = length - i // number of subarrays starting with arr[i]
        let end = i + 1 // number of subarrays ending with arr[i]
        
        // addition assignment to the sum the value of the number of odd subarrays multiplied by the element
        sum += ((Math.ceil((start * end) / 2)) * arr[i])
    }

    return sum
}
