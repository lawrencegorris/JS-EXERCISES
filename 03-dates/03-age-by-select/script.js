/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let run = document.querySelector('#run');

    let currentDate = new Date();

    let day = document.querySelector('#dob-day').value;
    let month = document.querySelector('#dob-month').value;
    let year = document.querySelector('#dob-year').value;

    let userDOB = (day+month+year).

    run.addEventListener('mouseup', calcAge);

    function calcAge(){
        console.log(userDOB + currentDate);
    }

})();
