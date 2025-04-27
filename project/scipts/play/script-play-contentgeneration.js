/*****************************
 * Create caves
 *****************************/
let maxCave = 6;
function createCave() {
    let s = '';

    for (let i = 0; i < maxCave; i++) {
        s += `<img src="../img/caves/cave${i}.png" alt="cave" class="cave" id="cave${i}">`;
    }

    document.getElementById('caveBox').innerHTML = s;
}
createCave();
