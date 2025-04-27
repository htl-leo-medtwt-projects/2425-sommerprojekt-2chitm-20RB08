/***********************
 * Loot Class
 ***********************/
class Loot{
    constructor(name, label, deck, price, img, extraLife = 0){
        this.name = name;
        this.label = label
        this.deck = deck;
        this.price = price
        this.img = img
        this.extraLife = extraLife
    }
}

/***********************
 * Loot
 ***********************/
const emptyLoot  = new Loot('nothing', '....', [], 0, 'not here');
// Weapon
const flintlock = new Loot('Flintlock', 'weapon', [eyesClosedPunch, luckyHit], 40, '../img/lootCard/flintlock.png')
const brassKnuccles = new Loot('Brass Knuccles', 'weapon', [eyesClosedPunch, luckyHit], 15, '../img/lootCard/brassKnuccles.png')

// armor
const spikyHat = new Loot('Spiky Hat', 'armor', [bash, youTryinSomething], 7, '../img/lootCard/spikyHat.png')
const hornedHelm = new Loot('Horned Helm', 'armor', [bash, youTryinSomething], 57, '../img/lootCard/hornedHelm.png')
const doomPlate = new Loot('Doom Plate', 'armor', [bash, youTryinSomething, bash], 20, '../img/lootCard/doomPlate.png')
const paperCrown = new Loot('Paper Crown', 'armor', [fireShield, cower], 15, '../img/lootCard/paperCrown.png')

// Skil
const spyglass = new Loot('Spyglass', 'skil', [demolish, uhh], 26, '../img/lootCard/spyglass.png')
const twing = new Loot('Twing', 'skil', [eyesClosedPunch, oi], 5, '../img/lootCard/twing.png')

const loot = [flintlock, brassKnuccles, spikyHat, hornedHelm, doomPlate, spyglass, twing, paperCrown];