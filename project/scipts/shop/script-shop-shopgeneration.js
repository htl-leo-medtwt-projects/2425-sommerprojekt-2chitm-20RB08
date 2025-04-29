/**************************
 * Get sell ables
 *************************/
let sellable = [];
getSellable();
function getSellable() {
    sellable = [];
    // Alle gekauften Loots zusammenführen
    const playerLoots = [
        ...player.weaponArr,
        ...player.armorArr,
        ...player.skilArr
    ];

    // Durch alle vorhandenen Loots gehen
    for (let i = 0; i < loot.length; i++) {
        let currentLoot = loot[i];
        let owned = false;

        // Prüfen ob der Spieler diesen Loot besitzt
        for (let j = 0; j < playerLoots.length; j++) {
            if (playerLoots[j].name === currentLoot.name) {
                owned = true;
                break;
            }
        }

        // Wenn der Spieler diesen Loot nicht hat → ist er verkaufbar
        if (!owned) {
            sellable.push(currentLoot);
        }
    }
    console.log('***** Our Ware *****');
    console.log(sellable);
    createSellable();
}

/****************************
 * Create saleplate
 **************************/
function createSellable() {
    let s = '';

    for (let i = 0; i < sellable.length; i++) {
        s += `
        <img class="lootCard" id="lootCard${i}" src="${sellable[i].img}" alt="${sellable[i].name}"  onclick="selectLootCard(${i})">
        `;
    }

    document.getElementById('sellable').innerHTML = s;
    console.log('Sellable is created');

    document.getElementById('playerGold').innerHTML = player.gold;
}


/*************************
 * Create Purchaseplate
 ************************/
function createPurchaseplate(pos){
    console.log('***** Purchaseplate is createt');
    
    document.getElementById('purchaseplate').innerHTML = `
            <!--Pricetag-->
            <div class="plate" id="pricetag">
                <p>${sellable[pos].price}</p>
            </div>

            <!--Piktogramm-->
            <img id="piktogramm" src="../img/${sellable[pos].label}.png" alt="${sellable[pos].label}">

            <!--information-->
            <div id="info">
                ${getLootInfo(sellable[pos].deck)}
                ${getHeartsInfo(sellable[pos].extraLife)}
            </div>

            <!--Scrool-->
            <div class="scroll" id="buyButtom" onclick="buyLootCard(${pos})"><p>Buy</p></div>
    `;
}
function getLootInfo(deck){
    let s = '';
    for (let i = 0; i < deck.length; i++){
        s += `<img src="${deck[i].img}" alt="${deck[i].name}">`;
    }
    return s;
}
function getHeartsInfo(extraLife){
    let s = '';
    console.log(extraLife)
    if (extraLife != 0){
        s = `<div id="extraLive">${extraLife} <img src="../img/heart.png" alt"${extraLife}"></div>`;
    }
    return s;
}