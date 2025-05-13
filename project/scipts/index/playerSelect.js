let playerData = JSON.parse(localStorage['CC_player'] ?? null);
if (playerData == null) {
    let newPlayerData = {
        playerIndex: 0,
        players: [
            null,
            null,
            null
        ]
    }
    localStorage['CC_player'] = JSON.stringify(newPlayerData);
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

/****************
 * Delete
 ***************/
function deletePos(pos) {
    playerData.players[pos] = null;
    document.getElementById('playOrDelet').style.top = '1000%';

    // neu anzeigen 
    showPlayerselection();

    // speicher
    localStorage['CC_player'] = JSON.stringify(playerData);
}