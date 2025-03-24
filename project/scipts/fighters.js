/*************************
 * Fighter
 **************************/
class Fighter{
    constructor(name, startDeck, isHero = true) {
        this.name = name;
        this.maxLife = 4;
        this.life = this.maxLife;
        
        // Gold
        this.gold = 0;

        // Slot
        this.weapon;
        this.armor;
        this.skill = [];

        // deck
        this.startDeck = startDeck;

    }

    getAllCard(){
        deck = [];
        this.deck.push(this.startDeck);
        this.deck.push(this.weapon)
    } 
}