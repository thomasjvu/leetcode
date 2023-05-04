// LeetCode #860. Lemonade Change
/* Instructions
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

 

Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

Example 2:

Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.

 

Constraints:

    1 <= bills.length <= 105
    bills[i] is either 5, 10, or 20.

*/

// Solution
function lemonadeChange(bills) {
  let reserves5 = []
  let reserves10 = []
  let reserves20 = []

  // loop through bills
  for (let i = 0; i < bills.length; i++) {
    // if a $5, push it onto the reserves for fives
    if (bills[i] === 5) {
      reserves5.push(bills[i]);
    // if a $10, check if we have a five, if not, return false
    } else if (bills[i] === 10) {
      if (!reserves5.length) return false
      // if true, remove a 5 from the five reserves and add a 10 to the 10 reserves
      reserves5.pop()
      reserves10.push(bills[i]);
    // if a $20
    } else if (bills[i] === 20) {
      // check if we have a 5 and a 10, if so, pop one from both and add a 20 to the 20 reserves
      if (reserves5.length && reserves10.length) {
        reserves5.pop()
        reserves10.pop()
        reserves20.push(bills[i]);
      // otherwise, check if we have 3 fives, if so, remove those fives and add a 20 to the 20 reserves
      } else if (!reserves10.length && reserves5.length >= 3 ) {
        reserves5.splice(0, 3);
        reserves20.push(bills[i]);
      // otherwise, return false
      } else {
        return false;
      }
    }
  }
  // if all checks pass, return true
  return true;
}
