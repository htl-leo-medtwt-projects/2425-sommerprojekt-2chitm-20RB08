/*************************
 * New Player
 **************************/
class Player {
    constructor(name = 'Held') {
        this.name = name;
        this.health = 5;
        this.gold = 100;

        // Random Startdeck
        this.startDeck = startdeck[Math.floor(Math.random() * startdeck.length)];

        // Alle Karten (wird später zusammengesetzt)
        this.deck = [];

        // Gekaufte Loots
        this.weaponArr = [flintlock];
        this.armorArr = [flintlock];
        this.skilArr = [];

        // Ausgerüstete Loots
        this.weapon = null;
        this.armor = null;
        this.skil = null;

        // Alle Karten beim Start laden
        this.getAllCard();
    }

    getAllCard() {
        this.deck = [];
    
        // Startdeck
        if (this.startDeck) this.deck.push(...this.startDeck);
    
        // Ausgerüstete Loots
        if (this.weapon) this.deck.push(...this.weapon.deck);
        if (this.armor) this.deck.push(...this.armor.deck);
        if (this.skil) this.deck.push(...this.skil.deck);
    
        return this.deck;
    }
    

    getAllOwnedLoots() {
        return [this.weaponArr, this.armorArr, this.skilArr];
    }

    getCurrentLive(){
        let live = 5;

        let allLoot = this.getAllOwnedLoots();
        for (let i = 0; i < allLoot.length; i++){
            if (allLoot[i] != null){
                live += allLoot[i].extraLife;
            }
        }
        
        this.health = live;
        return live;
    }
}

/***********************
 * Get or create Player
 **********************/
let playerData = JSON.parse(localStorage['CC_player'] ?? '{}');
let player = Object.assign(new Player(), playerData);


localStorage['CC_player'] = JSON.stringify(player);

/***********************
 * Safe player
 **********************/
function safePlayer(){
    localStorage['CC_player'] = JSON.stringify(player);
}