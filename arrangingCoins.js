// Solution
const arrangeCoins = n => {
    let i = 1;
    let counter = 0;
    while (n-i >= 0) {
        n -= i
        counter++;
        i++;
    }
    return counter;
};

// Explanation
// Instantiate an iterator, i, and set it equal to 1
// Instantiate a counter, and set it equal to 0
// Create a loop that runs as long as n - i is greater than or equal to 0
// For each iteration, subtract i from n
// increment the counter by 1
// increment the iterator by 1
// This will result in our completed number of rows, so by the end, return counter
