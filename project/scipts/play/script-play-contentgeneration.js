/*****************************
 * Create caves
 *****************************/
let maxCave = 6;
function createCave() {
    let s = '';

    // create caves
    for (let i = 0; i < maxCave; i++) {
        if (i <= player.level) {
            s += `<img src="../img/caves/cave${i}.png" alt="cave" class="cave" id="cave${i}" onclick="newGame(${i})">`;
        } else {
            s += `<img src="../img/caves/cave${i}.png" alt="cave" class="cave" id="cave${i}">`;
        }
    }

    document.getElementById('caveBox').innerHTML = s;

    // show player gold
    document.getElementById('playerGold').innerHTML = `<span class="winnedGold">${player.gold}</span><span>Gold</span>`;

    // map arrows
    document.getElementById('userView').style.backgroundImage = `url(../img/mapArrows/maparrows${player.level}.png), url(../img/background/careered.jpg)`;
}
createCave();
