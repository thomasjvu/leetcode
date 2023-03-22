// LeetCode #1356. Sort Integers by The Number of 1 Bits
/* Instructions
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

 

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

 

Constraints:

    1 <= arr.length <= 500
    0 <= arr[i] <= 104


*/


// Solution
const sortByBits = (arr) => {
    // map the given array to an array of bits
    let bits = arr.map(e => e.toString(2))

    console.log('normal array', arr)
    console.log('bits array', bits)

    // create an array of the 1 bit counts
    let bitCounts = []

    for (let i = 0; i < bits.length; i++) {
        let bitCount = 0
        let bitString = String(bits[i])
        for (let j = 0; j < bitString.length; j++) {
            if (bitString[j] === '1') {
                bitCount++
            }
        }
        bitCounts.push(bitCount)
    }

    console.log('bit Counts', bitCounts)    

    // create an array of objects that contain both the original number and its bit count
    let arrWithBitCounts = arr.map((num, index) => {
        return {num, bitCount: bitCounts[index]}
    })

    console.log('array of objects with number-count', arrWithBitCounts)

    // sort the array of objects first by bit count, then by original number
    arrWithBitCounts.sort((a, b) => {
        if (a.bitCount !== b.bitCount) {
            return a.bitCount - b.bitCount
        } else {
            return a.num - b.num
        }
    })

    // extract the sorted original numbers from the array of objects
    let sortedArr = arrWithBitCounts.map(obj => obj.num)

    return sortedArr

};
