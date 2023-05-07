// LeetCode #2665. Counter II
/* Instructions
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

 

Constraints:

    -1000 <= init <= 1000
    total calls not to exceed 1000

*/

// Solution
function createCcounter(init) {
    let count = init

    return {
        increment() {
            count++
            return value
        },
        decrement() {
            count--
            return value
        },
        reset() {
            count = init
            return value
        }
    }
}

// Explanation
// Create a count variable that is set equal to init
// Inside the function, return an object that comprises three functions
// Increment uses the increment operator ++ to add 1 to the count
// Decrement uses the decrement operator -- to subtract 1 from the count
// Reset reassigns count to equal the init value
