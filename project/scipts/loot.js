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
const flintlock = new Loot('Flintlock', 'weapon', [smash, slice, fireblast], 220, '../img/lootCard/flintlock.png')
const brassKnuccles = new Loot('Brass Knuccles', 'weapon', [eyesClosedPunch, luckyHit], 82, '../img/lootCard/brassKnuccles.png')
const scimitar = new Loot('Scimitar', 'weapon', [smite, fireblast, uhh], 67, '../img/lootCard/scimitar.png');
const battleAxe = new Loot('Battle Axe', 'weapon', [demolish, rekindle], 120, '../img/lootCard/battleAxe.png', -2);
const cleaver = new Loot('Cleaver', 'weapon', [bash, fireShield,cower], 143, '../img/lootCard/cleaver.png');

// armor
const spikyHat = new Loot('Spiky Hat', 'armor', [bash, fireShield,cower], 143, '../img/lootCard/spikyHat.png')
const hornedHelm = new Loot('Horned Helm', 'armor', [smash, demolish], 320, '../img/lootCard/hornedHelm.png', 1)
const doomPlate = new Loot('Doom Plate', 'armor', [repel, youTryinSomething, flaskOfHealing, flaskOfHealing], 205, '../img/lootCard/doomPlate.png')
const paperCrown = new Loot('Paper Crown', 'armor', [counter], 125, '../img/lootCard/paperCrown.png', 1)
const cookingPot = new Loot('Cooking Pot', 'armor', [repel, cower], 77, '../img/lootCard/cookingPot.png', -1)

// Skil
const spyglass = new Loot('Spyglass', 'skil', [flaskOfHealing, cower, oi], 130, '../img/lootCard/spyglass.png')
const twing = new Loot('Twing', 'skil', [counter, uhh], 39, '../img/lootCard/twing.png')
const boilerPlate = new Loot('Boiler Plate', 'skil', [refresh], 376,'../img/lootCard/boilerPlate.png', -3)
const scrollOfSouls = new Loot('Scroll of Souls', 'skil', [eviscerate, slice], 250,'../img/lootCard/scrollOfSouls.png', 1)
const woollyHat = new Loot('Wolly Hat', 'skil', [cower, cower], 88,'../img/lootCard/woollyHat.png', -1)

const loot = [flintlock, brassKnuccles, scimitar, battleAxe, cleaver,
    spikyHat,  hornedHelm, doomPlate, paperCrown, cookingPot,  
    spyglass, twing, boilerPlate, scrollOfSouls, woollyHat];