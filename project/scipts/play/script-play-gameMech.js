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
    },
    level: null,
}

/**********************
 * New Game
 ********************/
function newGame(enemiePos) {
    // copy from enemie deck
    let enemieDeck = [];
    for(let i = 0; i < ENEMIES[enemiePos].deck.length; i++){
        enemieDeck[i] = ENEMIES[enemiePos].deck[i];
    }
    // configoriere kämpfer    
    fighters = {
        player: {
            name: player.name,
            img: player.img,
            deck: player.getAllCard(),
            live: player.getCurrentLive(),
            layedDownCards: [],
            currentCard: null,
            hand: [],
        },
        enemie: {
            name: ENEMIES[enemiePos].name,
            img: ENEMIES[enemiePos].img,
            deck: enemieDeck,
            live: ENEMIES[enemiePos].live,
            layedDownCards: [],
            currentCard: null,
            beatenGold: ENEMIES[enemiePos].beatenGold,
            stealGold: ENEMIES[enemiePos].stealGold,
            level: enemiePos,
        },
        level: enemiePos
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
    createLayedDownCard();

    // Keine karte nehmen
    document.getElementById('player-handBlock').style.top = '20%'

    // bildshirm bekommen
    doAnimation('#game-field', 'appearFromTop', 1, 'ease-in-out');
    setTimeout(() => {
        document.getElementById('game-field').style.top = '0%';
    }, 1000)

    // go to the next round
    setTimeout(() => {
        enemieDrawnCard();
    }, 2000)

    // winLose disapearen
    document.getElementById('winLose').style.top = '-100%';

    // background music switchen
    setBackgroundAudio('../sounds/backgroundMusic/navigation.mp3')
}

function getRandomNum(size) {
    return Math.floor(Math.random() * size);
}

/**********************
 * Game logik
 ********************/
// enemie draws a card
function enemieDrawnCard() {
    // Leeres Deck
    let timeWait = 0;
    if (fighters.enemie.deck.length === 0) {
        // Deck auffüllen, wenn es leer ist
        fighters.enemie.deck = [...fighters.enemie.layedDownCards];
        fighters.enemie.layedDownCards = [];

        // animation
        doAnimation('#enemie-layedDownCards', 'placeInLayedDownCard', 1, 'reverse')
        // deck wegziehen
        playPaperWipe();
        setTimeout(() => {
            createLayedDownCard();
        }, 1000)

        // Karten deck kreaieren
        setTimeout(() => {
            document.getElementById('enemie-deck').style.opacity = '1';
            doAnimation('#enemie-deck', 'takeACardFromTheDeck', 1, 'reverse')
            createFightersDecks();
            // deck wieder hinlegen
            playPaperWipe();
        }, 900)

        timeWait = 2000;
    }

    // Karte ziehen
    setTimeout(() => {
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
            doAnimation('#enemie-topCardDeck', 'takeACardFromTheDeck', 1, 'ease-in-out');
            // karte ziehen audio
            playPaperWhosh();
        }, 50);

        // Karte in layedDownCards geben
        setTimeout(() => {
            createLayedDownCard();
            createFightersDecks();
            doAnimation('#enemie-topLayedDownCard', 'placeInLayedDownCard', 1, 'ease-in-out');
            // karte ablegen audio
            playPaperWhosh();

            // freigebung einer karte ziehen
            setTimeout(() => {
                document.getElementById('player-handBlock').style.top = '-1000%'
            }, 1000)
        }, 1000);
    }, timeWait)

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
    if (fighters.player.live < 0) {
        fighters.player.live = 0
    }
    fighters.enemie.live -= enemieDamage;
    fighters.enemie.live += enemieCurrentCard.live;
    if (fighters.enemie.live < 0) {
        fighters.enemie.live = 0
    }

    // Animation
    setTimeout(() => {
        // animation
        doAnimation('#player .char', 'playerAttack', 2, 'ease-in-out');
        doAnimation('#enemie .char', 'enemieAttack', 2, 'ease-in-out');

        // hit audio abspieln
        setTimeout(() => {
            playHitSound();
        }, 500)


        // neues leben anzeigen
        setTimeout(() => {
            document.querySelector('#player .live').innerHTML = `${fighters.player.live}<img src="../img/heart.png" alt="heart" class="heart">`;
            document.querySelector('#enemie .live').innerHTML = `${fighters.enemie.live}<img src="../img/heart.png" alt="heart" class="heart">`;
        }, 1000)
    }, 1000)
    // Überprüfen, ob das Spiel vorbei ist
    setTimeout(() => {
        if (fighters.enemie.live <= 0 || fighters.player.live <= 0) {
            gameOver();
        } else {
            let timeWait = 0;
            if (fighters.player.deck.length == 0) {
                timeWait += 2000;
            }
            if (fighters.enemie.deck.length == 0) {
                timeWait += 2000;
            }

            // gegner kartendeck ist leer
            if (fighters.enemie.deck.length == 0) {
                document.getElementById('enemie-deck').style.opacity = '0';
            }
            setTimeout(() => {
                // spieler zieht eine Karte
                playerDrawnCard();
                // gegner zieht nächste karte
                setTimeout(() => {
                    enemieDrawnCard();
                }, 3000)
            }, timeWait)
        }
    }, 2000)
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
    doAnimation(`#playerhand${playerHandPos}`, 'takeACardFromTheDeck', 1, 'ease-in-out');
    // karte nehmenm
    playPaperWhosh();

    // keine karten mehr auswälne
    // freigebung eine karte ziehen
    document.getElementById('player-handBlock').style.top = '20%'

    // Karte auswählen und verschieben
    setTimeout(() => {
        fighters.player.currentCard = fighters.player.hand[playerHandPos];
        fighters.player.layedDownCards.push(fighters.player.currentCard);
        fighters.player.hand.splice(playerHandPos, 1);
        console.log(`***Spieler greift an mit '${fighters.player.currentCard.name}'***`);

        // karte ablegen
        playPaperWhosh();

        // Ansicht aktualisieren
        createGamePOV();
        createLayedDownCard();
        doAnimation('#player-topLayedDownCard', 'placeInLayedDownCard', 1, 'ease-in-out');
        // Kampf starten
        fight();
    }, 1000);


}
// palyer Drwan card
function playerDrawnCard() {
    // *** Wenn deck leer ist ***
    let timeWait = 0;
    if (fighters.player.deck.length === 0) {
        // Deck auffüllen, wenn es leer ist
        fighters.player.deck = [...fighters.player.layedDownCards];
        fighters.player.layedDownCards = [];

        // animation
        doAnimation('#player-layedDownCards', 'placeInLayedDownCard', 1, 'reverse')
        // deck wegziehen
        playPaperWipe();
        setTimeout(() => {
            createLayedDownCard();
        }, 1000)

        // Karten deck kreaieren
        setTimeout(() => {
            doAnimation('#player-deck', 'takeACardFromTheDeck', 1, 'reverse')
            createFightersDecks();
            // neus deck hinlegen
            playPaperWipe();
        }, 900)

        timeWait = 2000;
    }

    // *** Karte ziehen ****
    setTimeout(() => {
        // Animation Karte ziehen
        setTimeout(() => {
            doAnimation('#player-topCardDeck', 'takeACardFromTheDeck', 1, 'ease-in-out');
            // Zufällige Karte ziehen
            const pos = getRandomNum(fighters.player.deck.length);
            const drawnCard = fighters.player.deck.splice(pos, 1)[0]; // Karte entfernen und direkt speichern

            // Karte zur Hand hinzufügen
            fighters.player.hand.push(drawnCard);
            console.log(`***Spieler zieht '${drawnCard.name}'***`);

            // karte nehmenm vom spieler deck
            playPaperWhosh();
        }, 50);

        // Karte in hand geben
        setTimeout(() => {
            createFightersDecks();
            getPlayerHand();
            doAnimation('#playerhand2', 'takeACardFromTheDeck', 1, 'ease-in-out reverse');

            // karte in die hand legen
            playPaperWhosh();
        }, 1000)
    }, timeWait)
}

/******************
 * Game Over
 *****************/
function gameOver() {
    let crowd = '';
    // Verloren
    if (fighters.player.live <= 0) {
        let stealGold = fighters.enemie.stealGold
        document.getElementById('winLose').style.backgroundImage = 'url(../img/youLoseImg.png)';
        document.getElementById('winLose').offsetHeight;
        document.getElementById('earnedGold').innerHTML = `<span>-<span class="losedGold">${stealGold}</span><small>Gold</small></span>`

        // gold abziehen
        if (player.gold - stealGold < 0) {
            player.gold = 0;
        } else {
            player.gold = player.gold - stealGold;
        }

        // ablevel
        if (player.level == fighters.level && player.level != 0) { // downfal nach 1 zurück
            player.level--;
        } else { // zurückfallen wo man war
            player.level = fighters.level;
        }

        // crowd booin
        crowd = '../sounds/backgroundMusic/booingCrowd.mp3';
    } else { // gewonnen
        document.getElementById('winLose').style.backgroundImage = 'url(../img/youWinImg.png)';
        document.getElementById('winLose').offsetHeight;
        document.getElementById('earnedGold').innerHTML = `<span><span class="winnedGold">${fighters.enemie.beatenGold}</span><small>Gold</small></span>`

        // gold hinzufügen
        player.gold += fighters.enemie.beatenGold;

        // aulf leveln wenn er auf allerhöchsten level ist
        if (player.level == fighters.level) {
            player.level++;
        }

        // crowd booin
        crowd = '../sounds/backgroundMusic/cheringCrowd.wav';
    }

    // Animation
    setTimeout(() => {
        doAnimation('#winLose', 'appearFromTop', 2, 'ease-in-out');
        setBackgroundAudio(crowd);
        setTimeout(() => {
            document.getElementById('winLose').style.top = `0%`
        }, 2000)
    }, 2000)


    // spilerstand neu speicher
    safePlayer();
}