/**************************
 * Get sell ables
 *************************/
let sellable = [];
getSellable();
function getSellable() {
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
createSellable();

/*************************
 * Select loot card
 ************************/
function selectLootCard(num) {

    // Sellable neuladen
    createSellable();

    // obj hinzufügen
    document.getElementById(`lootCard${num}`).classList.add('activeLootCard')
}