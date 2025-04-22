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
    enemieDrawnCard();
}
newGame(0)

function getRandomNum(size) {
    return Math.floor(Math.random() * size);
}

/**********************
 * Game logik
 ********************/
// enemie draws a card
function enemieDrawnCard() {
    // Gegner zieht eine Karte
    let size = fighters.enemie.deck.length;
    let pos = getRandomNum(size);
    let drawnCard = fighters.enemie.deck[pos];

    fighters.enemie.currentCard = drawnCard;
    fighters.enemie.layedDownCards.push(drawnCard);
    fighters.enemie.deck.splice(pos, 1);
    console.log(`***Gegner zieht '${drawnCard.name}'***`);
    // Wenn das deck leer ist


    console.log(`***Gegner zieht '${drawnCard.name}'***`);

    // Animation Karte ziehen
    setTimeout(() => {
        doAnimation('enemie-topCardDeck', 'takeACardFromTheDeck', 1, 'ease-in-out');
    }, 50);

    // Karte in layedDownCards geben
    setTimeout(() => {
        createLayedDownCard();
        createFightersDecks();
        doAnimation('enemie-topLayedDownCard', 'placeInLayedDownCard', 1, 'ease-in-out');
    }, 1000);
}

// fights
function fight() {
    let playerCurrentCard = fighters.player.currentCard;
    let enemieCurrentCard = fighters.enemie.currentCard;
    // player schaden
    let playerDamage = getDamage(enemieCurrentCard, playerCurrentCard);
    let enemieDamage = getDamage(playerCurrentCard, enemieCurrentCard);

    // Leben anpassen
    fighters.player.live -= playerDamage;
    fighters.player.live += playerCurrentCard.live;
    fighters.enemie.live -= enemieDamage;
    fighters.enemie.live += enemieCurrentCard.live;

    // Überprüfen, ob das Spiel vorbei ist
    if (fighters.player.live <= 0 || fighters.enemie.live <= 0) {
        gameOver();
    } else {

    }
    // Gehört eingenlich in die else
    // Gegner zieht eine Karte
    playerDrawnCard();
    // gegner zieht nächste karte
    enemieDrawnCard();

    createGamePOV();
}

// calculate damage
function getDamage(attacker, defender) {
    console.log('*******************');

    console.log("Angreifer:", attacker);
    console.log("Verteidiger:", defender);

    let damage = 0;

    // attacks
    let attack = attacker.attack;
    let magie = attacker.magie;

    // defens
    let attackBlock = defender.attackBlock;
    let magieBlock = defender.magieBlock;
    let universalBlock = defender.universalBlock;

    console.log("attack:", attack);
    console.log("magie:", magie);
    console.log("attackBlock:", attackBlock);
    console.log("magieBlock:", magieBlock);
    console.log("universalBlock:", universalBlock);


    // Damage
    let attackDamage = Math.max(0, attack - attackBlock);
    console.log(`Attack Damage: ${attackDamage}`);

    let magieDamage = Math.max(0, magie - magieBlock);
    console.log(`Magie Damage: ${magieDamage}`);

    damage = Math.max(0, attackDamage + magieDamage - universalBlock)
    console.log('Total Damage: ' + damage);

    return damage;
}

// ===== Player Funktionen =====
// player attack
function playerAttack(playerHandPos) {
    // Animation starten, bevor die Karte entfernt wird
    doAnimation(`playerhand${playerHandPos}`, 'takeACardFromTheDeck', 1, 'ease-in-out');

    // Karte auswählen und verschieben
    setTimeout(() => {
        fighters.player.currentCard = fighters.player.hand[playerHandPos];
        fighters.player.layedDownCards.push(fighters.player.currentCard);
        fighters.player.hand.splice(playerHandPos, 1);
        console.log(`***Spieler greift an mit '${fighters.player.currentCard.name}'***`);

        // Ansicht aktualisieren
        createGamePOV();
        createLayedDownCard();
        doAnimation('player-topLayedDownCard', 'placeInLayedDownCard', 1, 'ease-in-out');
        // Kampf starten
        fight();
    }, 1000);


}
// palyer Drwan card
function playerDrawnCard() {
    if (fighters.player.deck.length === 0) {
        // Deck auffüllen, wenn es leer ist
        fighters.player.deck = [...fighters.player.layedDownCards];
        fighters.player.layedDownCards = [];
        createLayedDownCard();
    }

    // Animation Karte ziehen
    setTimeout(() => {
        doAnimation('player-topCardDeck', 'takeACardFromTheDeck', 1, 'ease-in-out');
        // Zufällige Karte ziehen
        const pos = getRandomNum(fighters.player.deck.length);
        const drawnCard = fighters.player.deck.splice(pos, 1)[0]; // Karte entfernen und direkt speichern

        // Karte zur Hand hinzufügen
        fighters.player.hand.push(drawnCard);
        console.log(`***Spieler zieht '${drawnCard.name}'***`);
    }, 50);

    // Karte in hand geben
    setTimeout(() => {
        createFightersDecks();
        getPlayerHand();
        doAnimation('playerhand2', 'takeACardFromTheDeck', 1, 'ease-in-out reverse');
    }, 1000);



    // Ansicht aktualisieren
    createGamePOV();
}

/******************
 * Game Over
 *****************/
function gameOver() {

}