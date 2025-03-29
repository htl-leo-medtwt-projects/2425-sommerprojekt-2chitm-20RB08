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

}


/*************************
 * Select loot card
 ************************/
function selectLootCard(num) {
    // Sellable neuladen
    createSellable();

    // obj hinzufügen
    document.getElementById(`lootCard${num}`).classList.remove('lootCard')
    document.getElementById(`lootCard${num}`).classList.add('activeLootCard');

    // purchaes plate anzegen
    createPurchaseplate(num);
}
// create purchaseplate
function createPurchaseplate(pos){
    console.log('***** Purchaseplate is createt');
    
    document.getElementById('purchaseplate').innerHTML = `
            <!--Pricetag-->
            <div class="plate" id="pricetag">
                <p>${sellable[pos].price}</p>
            </div>

            <!--information-->
            <div id="info">
                ${getLootInfo(sellable[pos].deck)}
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

/*************************
 * Buy LootCard
 ************************/
function buyLootCard(pos){
    if (player.gold - sellable[pos].price >= 0){
        // gold vom Spieler abziehen
        player.gold -= sellable[pos].price

        // Art des Loot richtig einsortieren
        switch(sellable[pos].label){
            case 'weapon':
                player.weaponArr.push(sellable[pos]);
                break;
            case 'amor':
                player.armorArr.push(sellable[pos]);
                break;
            case 'skil':
                player.skilArr.push(sellable[pos]);
                break;
        }

        // Player neuen status speichern
        localStorage['CC_player'] = JSON.stringify(player);

          // information loggen
          console.log(`***** Purchaes succeeded *****\nYou bought${sellable[pos].name}`);

        // Alles neuladen
        getSellable();        
    } else{
        // fehler animation
        document.getElementById('buyButtom').style.animation = 'none';
        document.getElementById('buyButtom').offsetHeight;
        document.getElementById('buyButtom').style.animation = 'errorShake 0.4s ease';

        // information loggen
        console.log(`***** Purchaes failde *****\n You do not have enough gold!`);
    }
}