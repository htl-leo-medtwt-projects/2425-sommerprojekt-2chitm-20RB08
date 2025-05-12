/*********************
 * Show Playerselection
 ********************/
function showPlayerselection(){
    // give away playbutton
    document.getElementById('play').style.top = '-1000%';
    // show every playestat
    document.getElementById('playerSelect').style.marginTop = '35%';
    document.getElementById('playerSelect').style.animation = 'none';
    document.getElementById('playerSelect').offsetHeight;
    document.getElementById('playerSelect').style.animation = 'appear 1s ';

    // create player select
    let s = '';
    for (let i = 0; i < playerData.players.length; i++){
        if (playerData.players[i] == null){
            s += `<div class="scroll" onclick="playHero(${i})"><a href="pages/reveal.js-master/tutorial.html">New</a></div>`
        } else {
            s += `<div class="scroll" onclick="playHero(${i})"><a href="pages/reveal.js-master/tutorial.html">Lv.${playerData.players[i].level + 1}</a></div>`
        }
    }
    document.getElementById('playerSelect').innerHTML = s;
}

/******************
 * Play Hero
 ********************/
function playHero(pos) {
    playerData.playerIndex = pos;

    // Spieler speichern 
    localStorage['CC_player'] = JSON.stringify(playerData);

    // Seite wechseln
    window.location.href = 'pages/reveal.js-master/tutorial.html';
}