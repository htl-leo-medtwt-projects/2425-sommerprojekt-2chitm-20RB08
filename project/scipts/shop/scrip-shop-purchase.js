/*************************
 * Select loot card
 ************************/
let waitSwitch = false;
function selectLootCard(num) {
    // Sellable neuladen
    createSellable();

    // obj hinzufügen
    document.getElementById(`lootCard${num}`).classList.remove('lootCard')
    document.getElementById(`lootCard${num}`).classList.add('activeLootCard');

    // animate purchaseplate
    document.getElementById('purchaseplate').style.animation = 'none';
    document.getElementById('purchaseplate').offsetHeight;
    document.getElementById('purchaseplate').style.animation = 'switch 1s';

    // purchaes plate anzegen
    setTimeout(() => {
        createPurchaseplate(num);
    }, 500)
}

/*************************
 * Buy LootCard
 ************************/
function buyLootCard(pos) {
    if (player.gold - sellable[pos].price >= 0) {
        // gold vom Spieler abziehen
        player.gold -= sellable[pos].price

        // Art des Loot richtig einsortieren
        switch (sellable[pos].label) {
            case 'weapon':
                player.weaponArr.push(sellable[pos]);
                break;
            case 'armor':
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

        // animate purchaseplate
        document.getElementById('purchaseplate').style.animation = 'none';
        document.getElementById('purchaseplate').offsetHeight;
        document.getElementById('purchaseplate').style.animation = 'bought 0.5s';

        // purchaes plate anzegen
        setTimeout(() => {
            document.getElementById('purchaseplate').innerHTML = '<h2>What are you loking for?</h2>';
        }, 250)
    } else {
        // fehler animation
        document.getElementById('buyButtom').style.animation = 'none';
        document.getElementById('buyButtom').offsetHeight;
        document.getElementById('buyButtom').style.animation = 'errorShake 0.4s ease';

        // information loggen
        console.log(`***** Purchaes failde *****\n You do not have enough gold!`);
    }
}