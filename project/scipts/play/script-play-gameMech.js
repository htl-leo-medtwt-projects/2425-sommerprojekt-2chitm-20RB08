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
            img: player.img,
            deck: player.getAllCard(),
            live: player.health,
            layedDownCards: [],
            currentCard: null,
            hand: [],
        },
        enemie: {
            name: ENEMIES[enemiePos].name,
            img: ENEMIES[enemiePos].img,
            deck: ENEMIES[enemiePos].deck,
            live: ENEMIES[enemiePos].live,
            layedDownCards: [],
            currentCard: null,
        }
    }


    // getting 3 hand cards
    for (let i = 0; i < 3; i++) {
        // random karte ziehen
        let size = fighters.player.deck.length;
        let pos = getRandomNum(size)
        let drawnCard = fighters.player.deck[pos];

        // zur hand hinzufügen und vom deck entfernen
        fighters.player.hand.push(drawnCard);
        fighters.player.deck.splice(pos, 1);
    }

    createGamePOV();
    // go to the next round
    nextRound();
}
newGame(0)

function getRandomNum(size) {
    return Math.floor(Math.random() * size);
}

/**********************
 * Game logik
 ********************/
function nextRound(){
    // === enemie zieht random karte ===
    // random karte ziehen
    let size = fighters.enemie.deck.length;
    let pos = getRandomNum(size)
    let drawnCard = fighters.enemie.deck[pos];
    // zur hand hinzufügen und vom deck entfernen
    fighters.enemie.currentCard = drawnCard;
    fighters.enemie.layedDownCards.push(drawnCard)
    fighters.enemie.deck.splice(pos, 1);
    
    createLayedDownCard();
}

function playerAttack(playerHandPos){
    fighters.player.currentCard = fighters.player.hand[playerHandPos]
    fighters.player.layedDownCards.push(fighters.player.currentCard)
    fighters.player.hand.splice(playerHandPos, 1);

    createGamePOV();
    createLayedDownCard();


}

function fight(){
    // player schaden
    let player 
}

function gameOver() {

}