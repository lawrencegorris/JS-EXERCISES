/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let page = document.querySelector('html');   
    let redButton = document.querySelector('#red');
    let greenButton = document.querySelector('#green');
    let yellowButton = document.querySelector('#yellow');
    let blueButton = document.querySelector('#blue');

    redButton.addEventListener("click", changeColorRed);
    greenButton.addEventListener("click", changeColorGreen);
    yellowButton.addEventListener("click", changeColorYellow);
    blueButton.addEventListener("click", changeColorBlue);

    function changeColorRed(){
        page.style.backgroundColor="red";
    }
    function changeColorGreen(){
        page.style.backgroundColor="green";
    }

    function changeColorYellow(){
        page.style.backgroundColor="yellow";
    }

    function changeColorBlue(){
        page.style.backgroundColor="blue";
    }


})();
