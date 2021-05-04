/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here;
    const id = parseInt(document.querySelector('#hero-id').value);
    const target = document.querySelector('#target');
    const run = document.querySelector('#run');
    run.addEventListener('click', runFunction);

   async function runFunction(){
        const hero = await fetch('http://localhost:8000/_shared/api.json');
        const showHero = hero.json();
        console.log(showHero)
    }
})();
