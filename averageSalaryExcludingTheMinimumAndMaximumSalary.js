// LeetCode #1491. Average Salary Excluding the Minimum and Maximum Salary
/* Instructions
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

 

Constraints:

    3 <= salary.length <= 100
    1000 <= salary[i] <= 106
    All the integers of salary are unique.

*/

// Solution
function average(salary) {
    // create a sorted array (ascending)
    let arr = salary.sort((a, b) => a - b)

    // remove the first and last element (min and max) respectively
    arr.shift()
    arr.pop()

    // create avg variable equal to reduced array divided by its length
    let avg = arr.reduce((a, b) => a + b) / arr.length

    // return the average fixed to 5 decimal places (10^-5)
    return avg.toFixed(5)
}

// Explanation
// Time Complexity: O(nlogn) due to the use of the Array.sort() method

// Solution 2
function average(salary) {
    // initialize sum at 0, min to the largest possible number, and max to the smallest possible number
    let sum = 0
    let minSalary = Infinity
    let maxSalary = -Infinity

    // loop through salary array to find the true min and max value
    for (let i = 0; i < salary.length; i++) {
        sum += salary[i]
        if (salary[i] < minSalary) {
            minSalary = salary[i]
        } if (salary[i] > maxSalary) {
            maxSalary = salary[i]
        }
    }

    // return the true sum divided by the true length, and use .toFixed to round to 5 decimal places (10^-5)
    return ((sum - minSalary - maxSalary) / (salary.length - 2)).toFixed(5)
}
