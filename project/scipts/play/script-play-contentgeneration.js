/*****************************
 * Create caves
 *****************************/
let maxCave = 6;
function createCave(){
    let s = '';

    for (let i = 0; i < maxCave; i++){
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
    // ===== PLAYER =====
    document.getElementById('player').innerHTML = `
        <div class="name">${fighters.player.name}</div>
        <div class="live">${fighters.player.live}<img src="../img/heart.png" alt="heart" class="heart"></div>
        <img src="${fighters.player.img}" alt="${fighters.player.name}" class="char">
    `;
    // players deck
    let s = '';
    for (let i = 0; i < fighters.player.deck.length; i++) {
        s += `<img src="../img/heroCard/backside.png" alt="herocard">`
    }
    document.getElementById('player-deck').innerHTML = s;

    //player hand
    s = '';
    for (let i = 0; i < fighters.player.hand.length; i++) {
        let cardName = fighters.player.hand[i].name;
        let cardImg = fighters.player.hand[i].img;
        s += `<img src="${cardImg}" alt="${cardName}" onclick="playerAttack(${i})">`;
    }
    document.getElementById('player-hand').innerHTML = s;

    // ===== ENEMIE =====
    document.getElementById('enemie').innerHTML = `
        <div class="name">${fighters.enemie.name}</div>
        <div class="live">${fighters.enemie.live}<img src="../img/heart.png" alt="heart" class="heart"></div>
        <img src="${fighters.enemie.img}" alt="${fighters.enemie.name}" class="char">
    `;
    // enemies deck
    s = '';
    for (let i = 0; i < fighters.enemie.deck.length; i++) {
        s += `<img src="../img/enemieCard/backside.png" alt="enemieCard">`
    }
    document.getElementById('enemie-deck').innerHTML = s;

    
}

/********************
 * Create layed down Cards
 *******************/
function createLayedDownCard(){
    // player
    let s = '';
    for (let i = 0; i < fighters.player.layedDownCards.length; i++){
        s += `<img src="${fighters.player.layedDownCards[i].img}" alt="${fighters.player.layedDownCards[i].name}">`
    }
    document.getElementById('player-layedDownCards').innerHTML = s;

    // enemie
    s = '';
    for (let i = 0; i < fighters.enemie.layedDownCards.length; i++){
        s += `<img src="${fighters.enemie.layedDownCards[i].img}" alt="${fighters.enemie.layedDownCards[i].name}">`
    }
    document.getElementById('enemie-layedDownCards').innerHTML = s;
}