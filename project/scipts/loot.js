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
const flintlock = new Loot('Flintlock', 'weapon', [eyesClosedPunch, luckyHit], 20, '../img/flintlock.png')
const brassKnuccles = new Loot('Brass Knuccles', 'weapon', [eyesClosedPunch, luckyHit], 20, '../img/brassKnuccles.png')

// Amor
const spikyHat = new Loot('Spiky Hat', 'amor', [bash, youTryinSomething], 20, '../img/spikyHat.png')
const hornedHelm = new Loot('Horned Helm', 'amor', [bash, youTryinSomething], 20, '../img/hornedHelm.png')
const doomPlate = new Loot('Doom Plate', 'amor', [bash, youTryinSomething], 20, '../img/doomPlae.png')

// Skil
const spyglass = new Loot('Spyglass', 'skil', [demolish, uhh], 20, '../img/lootCard.png')

const loot = [flintlock, brassKnuccles, spikyHat, hornedHelm, doomPlate, spyglass];