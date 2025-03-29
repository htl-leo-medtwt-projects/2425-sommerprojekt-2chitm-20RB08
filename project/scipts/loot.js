/***********************
 * Loot Class
 ***********************/
class Loot{
    constructor(name, label, deck, price, img){
        this.name = name;
        this.label = label
        this.deck = deck;
        this.price = price
        this.img = img
    }
}

/***********************
 * Loot
 ***********************/
// Weapon
const flintlock = new Loot('Flintlock', 'weapon', [eyesClosedPunch, luckyHit], 40, '../img/lootCard/flintlock.png')
const brassKnuccles = new Loot('Brass Knuccles', 'weapon', [eyesClosedPunch, luckyHit], 15, '../img/lootCard/brassKnuccles.png')

// Amor
const spikyHat = new Loot('Spiky Hat', 'amor', [bash, youTryinSomething], 7, '../img/lootCard/spikyHat.png')
const hornedHelm = new Loot('Horned Helm', 'amor', [bash, youTryinSomething], 57, '../img/lootCard/hornedHelm.png')
const doomPlate = new Loot('Doom Plate', 'amor', [bash, youTryinSomething, bash], 20, '../img/lootCard/doomPlate.png')

// Skil
const spyglass = new Loot('Spyglass', 'skil', [demolish, uhh], 26, '../img/lootCard/spyglass.png')

const loot = [flintlock, brassKnuccles, spikyHat, hornedHelm, doomPlate, spyglass];