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
function createSellable(){
    let s = '';

    for (let i = 0; i < sellable.length; i++){
        s += `
        <img src="${sellable[i].img}" alt="">
        `;
    }

    document.getElementById('sellable').innerHTML = s;
}
createSellable();