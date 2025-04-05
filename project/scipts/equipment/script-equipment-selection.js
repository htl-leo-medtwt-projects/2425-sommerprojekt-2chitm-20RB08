/********************
 * ope nEquip
 ********************/
function openEquip(cat, pos){
    // hole karte
    let sectionArr;
    console.log('*** Get LootCard ***');
    switch(cat){
        case 'weapon' : sectionArr = player.weaponArr; console. break;
        case 'armor' : sectionArr = player.armorArr;  break;
        case 'skil' : sectionArr = player.skilArr; break;
    }
    console.log(sectionArr);
    let card = sectionArr[pos];
    console.log(`Card: ${card}`);
    

    //

    document.getElementById('equip').style.bottom = '50%';
}


/********************
 * Close Equipment
 ********************/
function closeEquip(){
    document.getElementById('equip').style.bottom = '-150%';
    console.log('Close Equip');
    
}