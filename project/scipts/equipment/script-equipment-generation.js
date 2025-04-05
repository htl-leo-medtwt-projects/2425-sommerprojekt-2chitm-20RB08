/*************************
 * Close Selectcard
 *************************/
function closeSelectplate() {
    document.getElementById('selectplate').style.animation = 'none';
    document.getElementById('selectplate').offsetHeight;
    document.getElementById('selectplate').style.animation = 'selectplateDisapear 1s';

    setTimeout(()=>{
        document.getElementById('selectplate').style.bottom = '-150%';
    }, 1000)
}

/**********************
 * OpenSelectcard
 **********************/
function openSelectplate(cat){
    let sectionArr;
    console.log('===== Section ' + cat + '=====');
    switch(cat){
        case 'weapon' : sectionArr = player.weaponArr; console.log(player.weaponArr); break;
        case 'armor' : sectionArr = player.armorArr; console.log(player.armorArr); break;
        case 'skil' : sectionArr = player.skilArr; console.log(player.skilArr); break;
    }
    console.log(sectionArr);
    

    let s = '';
    for (let i = 0; i < sectionArr.length; i++){
        s += `<img src="${sectionArr[i].img}" alt="${sectionArr[i].name}"" class="lootCard">`;
    }
    document.getElementById('lootCardSelection').innerHTML = s;

    // animation
    document.getElementById('selectplate').style.animation = 'none';
    document.getElementById('selectplate').offsetHeight;
    document.getElementById('selectplate').style.animation = 'selectplateDisapear 1s reverse';

    setTimeout(()=>{
        document.getElementById('selectplate').style.bottom = '-40%';
    }, 1000)
}