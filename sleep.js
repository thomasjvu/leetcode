// LeetCode #2621. Sleep
/* Instructions
Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

 

Constraints:

    1 <= millis <= 1000

*/

// Solution
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
}

// Explanation
// Sleep is an asynchronous function that takes a positive integer `millis` as an argument
// The function creates a Promise that resolves `millis` milliseconds using the setTimeout function
// The promise is awaited using the `await` keyword, which allows the function to pause execution until the Promise is resolved
