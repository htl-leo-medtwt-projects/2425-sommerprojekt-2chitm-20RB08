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
const loot = [flintlock, spikyHat, spyglass];
// Weapon
const flintlock = new Loot('Flintlock', 'weapon', [eyesClosedPunch, luckyHit], 20, '../img/flintlock.png')

// Amor
const spikyHat = new Loot('Spiky Hat', 'amor', [bash, youTryinSomething], 20, '../img/spikyHat.png')

// Skil
const spyglass = new Loot('Spyglass', 'skil', [demolish, uhh], 20, '../img/lootCard.png')