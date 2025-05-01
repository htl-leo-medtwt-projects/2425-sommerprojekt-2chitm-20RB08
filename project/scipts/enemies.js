/**********************
 * Enemie class
 * ********************/
class enemie{
    constructor(name, deck, live, img, beatenGold,  stealGold){
        this.name = name;
        this.deck = deck;
        this.live = live;
        this.img = img;
        this.beatenGold = beatenGold;
        this.stealGold = stealGold;
    }
}

// Albino Goblin lv1/index: 0
const goblin = new enemie("Goblin", albinoGoblinDeck, 3, '../img/charakter/goblin.png', 10, 5);
// Mummy lv2/index: 1
const mummy = new enemie("Mummy", mummyDeck, 5, "../img/charakter/mummy.png", 15, 8)
// Bandito lv3/index: 2
const bandito = new enemie('Bandito', banditoDeck, 6, '../img/charakter/bandito.png', 20, 13)
// Werecrab lv4/index: 3
const werecrab = new enemie('Werecrab', werecrabDeck, 8, '../img/charakter/werecrab.png', 30, 25)
// Birdy lv5/index: 4
const birdy = new enemie('Birdy', birdyDeck, 10, '../img/charakter/bird.png', 43, 34);
// Embro lv6/index: 5
const embro = new enemie('Embro', embroDeck, 14, '../img/charakter/embro.png', 50, 20)


const ENEMIES = [goblin, mummy, bandito, werecrab, birdy, embro];