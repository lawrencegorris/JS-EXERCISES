/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const validity = document.querySelector('#validity');
    const password = document.querySelector('#pass-one');
    let regex = /\d{2}/g;

    password.setAttribute('minlength', '8');
    password.setAttribute('pattern', '[0-9]{2}');

    password.addEventListener('input', checkInput);
    function checkInput(){
        if((password.value).length >= 8 && (password.value).match(matchRule)){
            validity.innerHTML = 'ok';
        }else {
            validity.innerHTML = 'Not ok';
        }
    }
})();
