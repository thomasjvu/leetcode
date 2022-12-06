// LeetCode #1185. Day of the Week
/* Instructions
 * Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.
*/


// Solution

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

const dayOfTheWeek = (day, month, year) => {
    switch (month) {
        case 1:
        month = 'january'
        break;
        case 2:
        month = 'february'
        break;
        case 3:
        month = 'march'
        break;
        case 4:
        month = 'april'
        break;
        case 5:
        month = 'may'
        break;
        case 6:
        month = 'june'
        break;
        case 7:
        month = 'july'
        break;
        case 8:
        month = 'august'
        break;
        case 9:
        month = 'september'
        break;
        case 10:
        month = 'october'
        break;
        case 11:
        month = 'november'
        break;
        case 12:
        month = 'december'
        break;
    }

   const d = new Date(`${day} ${month}, ${year}`) 
   let dayOfWeek = d.getDay()
   
   switch (dayOfWeek) {
       case 0:
       return 'Sunday'
       break;
       case 1:
       return 'Monday'
       break;
       case 2:
       return 'Tuesday'
       break;
       case 3:
       return 'Wednesday'
       break;
       case 4:
       return 'Thursday'
       break;
       case 5:
       return 'Friday'
       break;
       case 6:
       return 'Saturday'
       break;
   }
};

// Explanation
// Instantiate a new Date object by inputting the date in the correct format, which needs the Month to be the string equivalent.
// The .getDay() method can be used on a Date object to get the day of the week as a number (0 = Sunday, 6 = Saturday)
// Use a switch..case statememnt to return the correct String day of the week corresponding to its number equivalent.
