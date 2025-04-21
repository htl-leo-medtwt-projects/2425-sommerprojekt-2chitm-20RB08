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
function nextRound() {
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

function playerAttack(playerHandPos) {
    // gettig chosen card
    fighters.player.currentCard = fighters.player.hand[playerHandPos]
    fighters.player.layedDownCards.push(fighters.player.currentCard)
    fighters.player.hand.splice(playerHandPos, 1);
    console.log(`***Spieler greift an mit '${fighters.player.currentCard.name}'***`);


    // new pov
    createGamePOV();
    createLayedDownCard();

    // fight
    fight();
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
        nextRound();
    }

    createGamePOV();
}
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
function gameOver() {

}