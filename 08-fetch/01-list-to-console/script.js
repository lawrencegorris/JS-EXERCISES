/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const run = document.querySelector('#run');
    run.addEventListener('click', runFunction);
    async function runFunction() {
        let data = await fetch('http://localhost:8000/_shared/api.json');
        let main = await data.json();
        console.log(main);
    }

})();
