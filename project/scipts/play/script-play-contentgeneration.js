/*****************************
 * Create caves
 *****************************/
let maxCave = 6;
function createCave() {
    let s = '';

    for (let i = 0; i < maxCave; i++) {
        s += `<img src="../img/caves/cave${i}.png" alt="cave" class="cave" id="cave${i}">`;
    }

    document.getElementById('caveBox').innerHTML = s;
}
createCave();

/****************
 * Create Geme POV
 ***************/
// Gamer POV
function createGamePOV() {
    // get stats
    createFightersStats();

    // create decks
    createFightersDecks();

    // player hand
    getPlayerHand();
}

// ===== Player & enemie =====
function createFightersStats() {
    console.log('Fighters Stats are created!');

    // ===== player =====
    document.getElementById('player').innerHTML = `
        <div class="name">${fighters.player.name}</div>
        <div class="live">${fighters.player.live}<img src="../img/heart.png" alt="heart" class="heart"></div>
        <img src="${fighters.player.img}" alt="${fighters.player.name}" class="char">
    `;
    // enemie
    document.getElementById('enemie').innerHTML = `
        <div class="name">${fighters.enemie.name}</div>
        <div class="live">${fighters.enemie.live}<img src="../img/heart.png" alt="heart" class="heart"></div>
        <img src="${fighters.enemie.img}" alt="${fighters.enemie.name}" class="char">
        `;
}

function createFightersDecks() {
    console.log('Fighters Decks are created!');

    // players deck
    let s = '';
    for (let i = 0; i < fighters.player.deck.length; i++) {
        if (i == fighters.player.deck.length - 1) {
            s += `<img src="../img/heroCard/backside.png" alt="herocard" id="player-topCardDeck">`
        } else {
            s += `<img src="../img/heroCard/backside.png" alt="herocard">`
        }
    }
    document.getElementById('player-deck').innerHTML = s;

    // enemies deck
    s = '';
    for (let i = 0; i < fighters.enemie.deck.length; i++) {
        if (i == fighters.enemie.deck.length - 1) {
            s += `<img src="../img/enemieCard/backside.png" alt="enemieCard" id="enemie-topCardDeck">`
        } else {
            s += `<img src="../img/enemieCard/backside.png" alt="enemieCard">`
        }
    }
    document.getElementById('enemie-deck').innerHTML = s;
}

function getPlayerHand() {
    console.log('Player hand is created!');
    //player hand
    let s = '';
    for (let i = 0; i < fighters.player.hand.length; i++) {
        let cardName = fighters.player.hand[i].name;
        let cardImg = fighters.player.hand[i].img;
        s += `<img src="${cardImg}" alt="${cardName}" onclick="playerAttack(${i})" id="playerhand${i}">`;
    }
    document.getElementById('player-hand').innerHTML = s;
}

/********************
 * Create layed down Cards
 *******************/
function createLayedDownCard() {
    // player
    let s = '';
    for (let i = 0; i < fighters.player.layedDownCards.length; i++) {
        if (i == fighters.player.layedDownCards.length - 1) {
            s += `<img src="${fighters.player.layedDownCards[i].img}" alt="${fighters.player.layedDownCards[i].name}" id="player-topLayedDownCard">`
        }
        else {
            s += `<img src="${fighters.player.layedDownCards[i].img}" alt="${fighters.player.layedDownCards[i].name}">`
        }
    }
    document.getElementById('player-layedDownCards').innerHTML = s;

    // enemie
    s = '';
    for (let i = 0; i < fighters.enemie.layedDownCards.length; i++) {
        if (i == fighters.enemie.layedDownCards.length - 1) {
            s += `<img src="${fighters.enemie.layedDownCards[i].img}" alt="${fighters.enemie.layedDownCards[i].name}" id="enemie-topLayedDownCard">`
        } else {
            s += `<img src="${fighters.enemie.layedDownCards[i].img}" alt="${fighters.enemie.layedDownCards[i].name}">`
        }
    }
    document.getElementById('enemie-layedDownCards').innerHTML = s;
}

/********************
 * Animation
 * *******************/
function doAnimation(idName, animationName, duration, movement) {
    document.querySelector(idName).style.animation = 'none';
    document.querySelector(idName).offsetHeight;
    document.querySelector(idName).style.animation = `${animationName} ${duration}s ${movement}`;

    setTimeout(() => {
        document.querySelector(idName).style.animation = 'none';
        document.querySelector(idName).offsetHeight;
    }, duration * 1000)
}
