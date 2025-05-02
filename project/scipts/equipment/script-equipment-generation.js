/*************************
 * Close Selectcard
 *************************/
function closeSelectplate() {
    document.getElementById('selectplate').style.animation = 'none';
    document.getElementById('selectplate').offsetHeight;
    document.getElementById('selectplate').style.animation = 'selectplateDisapear 1s';

    // sound 
    playPaperWipe();

    setTimeout(() => {
        document.getElementById('selectplate').style.bottom = '-150%';
        closeEquip();
    }, 1000)
}

/**********************
 * OpenSelectcard
 **********************/
function openSelectplate(cat) {
    console.log('===== Section ' + cat + ' =====');
    let sectionArr = getSectionArray(cat);
    console.log(sectionArr);

    // zeigen
    let s = getSectionLootCard(cat);
    document.getElementById('lootCardSelection').innerHTML = s;

    // animation
    document.getElementById('selectplate').style.animation = 'none';
    document.getElementById('selectplate').offsetHeight;
    document.getElementById('selectplate').style.animation = 'selectplateDisapear 1s reverse';

    // sound 
    playPaperWipe();

    setTimeout(() => {
        document.getElementById('selectplate').style.bottom = '-40%';
    }, 1000)
}
function getSectionLootCard(cat) {
    let sectionArr = getSectionArray(cat);
    let sectionCat = getCatogory(cat);
    let s = '';
    for (let i = 0; i < sectionArr.length; i++) {
        if (sectionCat == null || sectionCat.name != sectionArr[i].name) {
            s += `<img src="${sectionArr[i].img}" alt="${sectionArr[i].name}"" class="lootCard" id="lootCard${i}" onclick="openEquip('${cat}', ${i})">`;
        } else {
            s += `<img src="${sectionArr[i].img}" alt="${sectionArr[i].name}"" class="activeLootCard" id="lootCard${i}" onclick="openEquip('${cat}', ${i})">`;
        }
    }
    return s;
}

/**********************
 * Get Section Array
 **********************/
function getSectionArray(cat) {
    let sectionArr;
    switch (cat) {
        case 'weapon': sectionArr = player.weaponArr; break;
        case 'armor': sectionArr = player.armorArr; break;
        case 'skil': sectionArr = player.skilArr; break;
    }
    return sectionArr
}