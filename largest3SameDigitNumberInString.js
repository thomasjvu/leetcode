// LeetCode #2264. Largest 3-Same-Digit Number in String
/* Instructions
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

    It is a substring of num with length 3.
    It consists of only one unique digit.

Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

    A substring is a contiguous sequence of characters within a string.
    There may be leading zeroes in num or a good integer.

 

Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".

Example 2:

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

Example 3:

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

 

Constraints:

    3 <= num.length <= 1000
    num only consists of digits.

*/

// Solution
const largestGoodInteger = (num) => {
    let substr = ""

    let i = 0;
    let j = 1;
    let k = 1;

    // loop through all groups of 3
    while (k < num.length) {
        // check if each 3 numbers in the nums array are the same
        if (num[i] === num[i] && num[j] === num[i] && num[k] === num[i] &&
        // check if the substr is greater or equal in value than the current substr
        Number(String(num[i]) + String(num[j]) + String(num[k])) >= Number(substr)) {
            // if both conditions are true, set substr equal to new valid group of 3
            substr = num[i] + num[i+1] + num[i+2]
        }

        i++
        j++
        k++
    }
    
    return substr
}
