// LeetCode #1360. Number of Days Between Two Dates
/* Instructions
Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 

Example 1:

Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1

Example 2:

Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15

 

Constraints:

    The given dates are valid dates between the years 1971 and 2100.
*/


// Solution

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

const daysBetweenDates = (date1, date2) => {

    const firstDate = new Date(date1)
    const secondDate = new Date(date2)

    let timeDifference = secondDate.getTime() - firstDate.getTime()
    let daysDifference = timeDifference / (1000 * 3600 * 24)

    return Math.abs(daysDifference)
}

// Explanation
// Create a new Date object using the `new Date ()` syntax
// Get the time equivalent of the date using the .getTime() function on each new Date object
// To get the difference in time, subtract the firstDate from the secondDate
// To get the difference in days, divide the time difference by days ( milliseconds -> seconds (1000) -> minutes (3600) -> hours (24) )
// Return the absolute value of the difference
