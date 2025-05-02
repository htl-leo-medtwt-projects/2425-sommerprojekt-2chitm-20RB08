/**********************
 * Play soundefect
 *********************/
function playSoundeffect(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

/************************
 * Shop
 **********************/
// purchase
const purchaseSound = new Audio('../sounds/effects/cash.mp3');
function playPurchaseSound(){
    playSoundeffect(purchaseSound);
}
// error
const errorSound  = new Audio('../sounds/effects/error.mp3')
function playErrorSound(){
    playSoundeffect(errorSound);
}
// switching sellable
const paperWipe = new Audio('../sounds/effects/paper.mp3')
function playPaperWipe(){
    playSoundeffect(paperWipe);
}

/***************
 * Equipment
 *************/
// open equip info
const popSound = new Audio('../sounds/effects/pop.mp3')
function playPopSound(){
    playSoundeffect(popSound);
}