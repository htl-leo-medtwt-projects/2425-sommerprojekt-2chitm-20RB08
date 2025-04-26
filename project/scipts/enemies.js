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

// Albino Goblin
const goblin = new enemie("Goblin", albinoGoblinDeck, 2, '../img/charakter/goblin.png', 50, 15)


const ENEMIES = [goblin];