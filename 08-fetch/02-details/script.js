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

    // creating const
    const target = document.querySelector('#target');
    const run = document.querySelector('#run');
    const template = document.querySelector('#tpl-hero');

    async function getData(){
        const id = document.querySelector('#hero-id').value;
        let data = await fetch(`http://localhost:3000/heroes?id=${id}`); // fetch data
        let heroes = await data.json(); //turn data into JSON
        return heroes; // return data in JSON format
    }
    // Event listener
    run.addEventListener('click', runClicked);

    function runClicked(){
        let specs = getData();
        specs.then(function (result){
            result = result [0];
            let tempCopy = template.content.cloneNode(true); // clones/copies html structure
            tempCopy.querySelector('.name').innerHTML = result.name;
            tempCopy.querySelector('.alter-ego').innerHTML = result.alterEgo;
            tempCopy.querySelector('.powers').innerHTML = result.abilities;
            target.appendChild(tempCopy);
        })
    }

})();
