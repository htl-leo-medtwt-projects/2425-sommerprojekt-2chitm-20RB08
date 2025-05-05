/*****************************
 * Create caves
 *****************************/
let maxCave = 6;
function createCave() {
    if (player.level < maxCave) {
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

        // hintergrund music änder
        setTimeout(() => {
            setBackgroundAudio('../sounds/backgroundMusic/battle.mp3');
        })
    } else {
        // show end
        console.log('show end');
        showEnd();
        // alle caves ichre onclick wegnehme
        let caves = document.querySelectorAll('.cave'); 
        for (let i = 0; i < caves.length; i++) {
            caves[i].onclick = null; 
        }
        document.getElementById('backScroll').innerHTML = '<p>Back</p>';
        // level zurücksetzen
        player.level--
    }

}
createCave();

function goBackToMap() {
    // Map neu gestalten
    createCave();

    // game field
    doAnimation('#game-field', 'appearFromTop', 2, 'reverse');
    setTimeout(() => {
        document.getElementById('game-field').style.top = '-100%';
    }, 2000)
}