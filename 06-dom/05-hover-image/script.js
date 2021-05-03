/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const hoverImg = document.querySelector('img');
    const imgOriginal = document.querySelector('img').src;
    const dataHover = document.querySelector('img').getAttribute('data-hover');
    
    hoverImg.addEventListener('mouseover', function(){
        hoverImg.src = dataHover;
        
    })

    hoverImg.addEventListener('mouseout', function(){
        hoverImg.src = imgOriginal;
    })

})();
