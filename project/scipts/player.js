/*************************
 * New Player
 **************************/
class Player {
    constructor(name = 'Held') {
        this.name = name;
        this.health = 5;
        this.gold = 100;
        this.img = '../img/charakter/player.png'

        // Random Startdeck
        this.startDeck = startdeckOptions[Math.floor(Math.random() * startdeckOptions.length)];

        // Alle Karten (wird später zusammengesetzt)
        this.deck = [];

        // Gekaufte Loots
        this.weaponArr = [];
        this.armorArr = [];
        this.skilArr = [];

        // Ausgerüstete Loots
        this.weapon = null;
        this.armor = null;
        this.skil = null;

        // level
        this.level = 0;

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
        return [this.weapon, this.armor, this.skil];
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