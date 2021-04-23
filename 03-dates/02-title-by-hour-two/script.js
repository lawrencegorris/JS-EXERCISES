/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.querySelector('#target');
    let currentHours = new Date.now().getHours();
    let currentMinutes = new Date.now().getMinutes();
    let Time = currentHours+currentMinutes;

    console.log(currentHours.toString() + currentMinutes.toString());

    function showTime(){
        if (currentHours <= 17 && currentMinutes <= 30){
            target.innerHTML = "Hello";
        }else {
            target.innerHTML = "Good evening";
        }
    }

    showTime();

})();
