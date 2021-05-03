/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let counter = document.querySelector('#counter');
    let password = document.querySelector('#pass-one');

    password.addEventListener('input', checkInput);

    function checkInput (){
        if((password.value).length <= 10){
            password.setAttribute('maxlength', '10');
        }else {
            password.removeAttribute('maxlength', '10');
        }
        counter.innerHTML = ((password.value).length + '/10');
    };
})();
