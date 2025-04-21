/**********************
 * Enemie class
 * ********************/
class enemie{
    constructor(name, deck, live, img){
        this.name = name;
        this.deck = deck;
        this.live = live;
        this.img = img
    }
}

// Albino Goblin
const goblin = new enemie("Albino Goblin", albinoGoblinDeck, 8, '../img/charakter/goblin.png')


const ENEMIES = [goblin];