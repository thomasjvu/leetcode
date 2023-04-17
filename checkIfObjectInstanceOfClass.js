// LeetCode #2618. Check if Object Instance of Class
/* Instructions
Write a function that checks if a given object is an instance of a given class or superclass.

There are no constraints on the data types that can be passed to the function.

 

Example 1:

Input: func = () => checkIfInstance(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstance(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstance(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false.

*/

// Solution
const checkIfInstanceOf = (obj, classFunction) => {

    // Go up the prototype chain until we find a match, or else the object will turn into null and thus we will return false
    while (obj != null) {
        if (obj.constructor === classFunction) {
            return true
        }
        // .getPrototypeOf enables us to go up the prototype chain and reassign our child object to its parent value
        obj = Object.getPrototypeOf(obj)
    }
    return false
}
