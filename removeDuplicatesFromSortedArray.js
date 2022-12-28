// LeetCode #26. Remove Duplicates from Sorted Array
/* Instructions
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.
*/



// Solution
const removeDuplicates = nums => {
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i++
}

// Explanation
// Declare a variable i that will act as both a counter and as a pointer for each array element
// Iterate through each element in the array with loop counter j set equal to 1
// If the previous element [i] is not equal to the current element [j], then add 1 to i
// Then, assign the element at position [j] to the element at position [i]
// Finally, return i+1, as the first i + 1 elements of the array contain the unique elements
