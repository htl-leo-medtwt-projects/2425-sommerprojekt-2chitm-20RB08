/***********************************
 * GAME CONFIG
 ***********************************/
let fighters = {
    player: {
        name: '',
        deck: [],
        layedDownCards: [],
        live: null,
        hand: null,
    },
    enemie: {
        name: '',
        deck: null,
        layedDownCards: null,
        live: null,
    }
}

/**********************
 * New Game
 ********************/
function newGame(enemiePos) {
    // configoriere kämpfer    
    fighters = {
        player: {
            name: player.name,
            deck: player.getAllCard(),
            live: player.health,
            layedDownCards: [],
            currentCard: null,
            hand: [],
        },
        enemie: {
            name: ENEMIES[enemiePos].name,
            deck: ENEMIES[enemiePos].deck,
            live: ENEMIES[enemiePos].live,
            layedDownCards: [],
            currentCard: null,
        }
    }
    console.log(fighters);

   
    // getting 3 hand cards
    for (let i = 0; i < 3; i++){
        // random karte ziehen
        let size = fighters.player.deck.length;
        let pos = getRandomNum(size)
        let drawnCard =  fighters.player.deck[pos];

        // zur hand hinzufügen und vom deck entfernen
        fighters.player.hand.push(drawnCard);
        fighters.player.deck.splice(pos, 1);
    }


}
newGame(0)

function getRandomNum(size) {
    return Math.floor(Math.random() * size);
}

function createGamePOV() {
    // players deck
    for (let i = 0; i < fighters.player.deck.length; i++){

    }
}

/**********************
 * Game loop
 ********************/