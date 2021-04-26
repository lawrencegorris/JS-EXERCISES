/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let value1 = parseInt(document.querySelector('#op-one').value);
    let value2 = parseInt(document.querySelector('#op-two').value);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(value1 + value2);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(value1 - value2);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(value1 * value2);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(value1 / value2);
    });
})();
