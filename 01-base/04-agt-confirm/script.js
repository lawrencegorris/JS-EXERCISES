/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function info() {

    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("In what town/city do you live?");

    ;

    if(confirm("You filled in: " + age + " years old, " + gender + ", from " + town + ". Is this correct?")){
        alert("Thanks for answering");
    }else {
        location.reload();
    }

})();
