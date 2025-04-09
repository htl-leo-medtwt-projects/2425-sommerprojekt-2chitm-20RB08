/********************
 * ope nEquip
 ********************/
function openEquip(cat, pos) {
    // hole karte
    console.log('*** Get LootCard ***');
    let sectionArr = getSectionArray(cat);
    console.log(sectionArr);
    // Karte entnehmen
    let lootCard = sectionArr[pos];
    console.log(`LootCard:`);
    console.log(lootCard);



    // show every cards
    let s = '';
    let isEquip = false;
    for (let i = 0; i < lootCard.deck.length; i++) {
        s += ` <img src="${lootCard.deck[i].img}" alt="${lootCard.deck[i].name}">`;
        // kontrollieren wenn karte schon equip wurde
        let playerCat = getCatogory(cat);
        if (playerCat != null && playerCat.name == sectionArr[pos].name) {
            isEquip = true;
        }
    }
    document.getElementById('cards').innerHTML = s;

    // equip or not
    if (isEquip) {
        document.getElementById('equipButton').innerHTML = 'Unequip'
        document.getElementById('equipButton').setAttribute('onclick', `unequipLootCaard('${cat}', ${pos})`)
    } else {
        document.getElementById('equipButton').innerHTML = 'Equip';
        document.getElementById('equipButton').setAttribute('onclick', `equipLootCaard('${cat}', ${pos})`)
    }

    // appear equip
    document.getElementById('equip').style.bottom = '50%';
}

function getCatogory(cat) {
    let playerCat;
    switch (cat) {
        case 'weapon': playerCat = player.weapon; break;
        case 'armor': playerCat = player.armor; break;
        case 'skil': playerCat = player.skil; break;
        default: playerCat = null;
    }
    return playerCat;
}

/************************
 * Un & equip loot cards
 ***********************/
function unequipLootCaard(cat, pos) {
    console.log(`***${cat} Unequipt***`);

    // change value
    switch (cat) {
        case 'weapon': player.weapon = null; break;
        case 'armor': player.armor = null; break;
        case 'skil': player.skil = null; break;
    }

    // switching to equip
    document.getElementById('equipButton').innerHTML = 'Equip';
    document.getElementById('equipButton').setAttribute('onclick', `equipLootCaard('${cat}', ${pos})`)

    // safe player
    safePlayer();

    // zeigen
    let s = getSectionLootCard(cat);
    document.getElementById('lootCardSelection').innerHTML = s;
}
function equipLootCaard(cat, pos) {
    console.log(`***${cat} Equipt***`);

    // change value
    switch (cat) {
        case 'weapon': player.weapon = player.weaponArr[pos]; break;
        case 'armor': player.armor = player.armorArr[pos]; break;
        case 'skil': player.skil = player.skilArr[pos]; break;
    }

    // switching to unequip
    document.getElementById('equipButton').innerHTML = 'Unequip'
    document.getElementById('equipButton').setAttribute('onclick', `unequipLootCaard('${cat}', ${pos})`)

    // safe player
    safePlayer();

    // zeigen
    let s = getSectionLootCard(cat);
    document.getElementById('lootCardSelection').innerHTML = s;
}
/********************
 * Close Equipment
 ********************/
function closeEquip() {
    document.getElementById('equip').style.bottom = '-150%';
    console.log('Close Equip');

}

/*****************
 * Change username
 *****************/
function openUsernameInput(){
    document.getElementById('userNameInput').style.top = '40%';
    document.getElementById('name').value = player.name;

    // give close
    document.getElementById('player').setAttribute('onclick', `closeUsernameInput()`)
}

function closeUsernameInput(){
    document.getElementById('userNameInput').style.top = '-40%';
    // give close
    document.getElementById('player').setAttribute('onclick', `openUsernameInput()`)
}

function changeUserName() {
    let name = document.getElementById('name').value;

    if (name != '' && name != ' '){
        console.log(`-- ${player.name} is rename to ${name} --`);
        player.name = name;
        safePlayer();
    }
}