// LeetCode #1154. Day of the Year
/* Instructions
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

Example 1:

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

Example 2:

Input: date = "2019-02-10"
Output: 41

 

Constraints:

    date.length == 10
    date[4] == date[7] == '-', and all other date[i]'s are digits
    date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.

*/


// Solution
const dayOfYear = function(date) {
    const thisYear = new Date(date.slice(0, 4))
    const thisDate = new Date(date)
    const dateNumber = ((thisDate - thisYear) / (1000 * 3600 * 24)) + 1

    return dateNumber
}

// Explanation
// Slice the first day of the year of the given date into a new variable, thisYear, by using the new Date() syntax with the slice of the date as an argument
// Create a new variable to hold the current date in a format that we can perform arithmetic on using new Date(date)
// Declare the variable dateNumber, and assign it a value of (thisDate - thisYear) / (1000 * 3600 * 24) to get the difference in dates.
// Add 1 to that number because the date will be inclusive
// Finally, return the dateNumber variable
