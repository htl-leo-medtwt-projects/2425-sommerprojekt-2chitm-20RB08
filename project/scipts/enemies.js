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
const goblin = new enemie("Goblin", albinoGoblinDeck, 2, '../img/charakter/goblin.png', 50, 15);
// Bandito lv3/index: 2
const bandito = new enemie('Bandito', banditoDeck, 5, '../img/charakter/bandito.png', 50, 20)


const ENEMIES = [goblin, bandito];