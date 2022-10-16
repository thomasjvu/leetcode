/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let revX = Number(String(x).split('').reverse().join(''))
    if (x !== revX) {
        return false
    } else if (x === revX) {
        return true
    }
};