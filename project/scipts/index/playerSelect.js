let playerData = JSON.parse(localStorage['CC_player'] ?? null);
if (playerData == null){
    let newPlayerData = {
        playerIndex : 0,
        players: [
            null,
            null,
            null
        ]
    }
    localStorage['CC_player'] = JSON.stringify(newPlayerData);
}