/**
 * This function checks if a number is even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 *
 * Usage:
 * const result = isEven(4); // result will be true
 * const anotherResult = isEven(7); // anotherResult will be false
 */

function isEven(number) {
if (number%2 == 0)
    return true;
else
    return false;
}
// https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
/**
 * This function checks if a number is within a range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum range (included)
 * @param {number} max - The maximum range (included)
 * @returns {boolean} - True if the number is within range, false otherwise.
 *
 * Usage:
 * const inRange = isWithinRange(5, 1, 10); // inRange will be true
 * const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false
 */

function isWithinRange(n, min, max) {
return n >= min && n <= max;
}

/**
 * This function checks if a string contains the string "ba"
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string contains the string ba
 *
 * Usage:
 * const bananaContainsBa = stringContainsBa("banana"); // true
 * const harborContainsBa = stringContainsBa("harbor"); // false
 * const harborContainsBa = stringContainsBa("habanana"); // true
 */

function stringContainsBa(string) {
return string.includes("ba")
}


/**
 * This function calculates the sum of each digit raised to its position.
 *
 * @param {number} num - The number to process.
 * @returns {number} - The calculated sum.
 *
 * Usage:
 * const result = sumOfDigitsWithPosition(1234); // result will be 1^1 + 2^2 + 3^3 + 4^4 = (1) + (2 * 2) + (3 * 3 * 3) + (4 * 4 * 4 * 4) =  1 + 4 + 27 + 256 = 288
 * const result = sumOfDigitsWithPosition(52); // result will be 5^1 + 2^2 = 5 + (2 * 2) = 5 + 4 = 9
 */

function sumOfDigitsWithPosition(num) {
return num.toString().split("")
    .reduce((sum,digit) =>
        sum + parseInt(digit),0);
}







