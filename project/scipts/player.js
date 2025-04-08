/*************************
 * New Player
 **************************/
class Player {
    constructor(name = 'Held', startDecks = []) {
        this.name = name;
        this.health = 5;
        this.gold = 20;

        // Random Startdeck
        this.startDeck = startDecks[Math.floor(Math.random() * startDecks.length)];

        // Alle Karten (wird später zusammengesetzt)
        this.deck = [];

        // Gekaufte Loots
        this.weaponArr = [flintlock, spyglass];
        this.armorArr = [flintlock];
        this.skilArr = [spyglass];

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
        if (this.startDeck) this.deck.push(this.startDeck);

        // Ausgerüstete Loots
        if (this.weapon) this.deck.push(this.weapon.deck);
        if (this.armor) this.deck.push(this.armor.deck);
        if (this.skil) this.deck.push(this.skil.deck);
    }

    getAllOwnedLoots() {
        return [this.weaponArr, this.armorArr, this.skilArr];
    }
}
class Fighter {
    constructor(name, startDeck, isHero = true) {
        this.name = name;
        this.maxLife = 4;
        this.life = this.maxLife;

        // Gold
        this.gold = 0;

        // Slot
        this.weapon;
        this.armor;
        this.skill;

        // deck
        this.startDeck = startDeck;

    }

    getAllCard() {
        deck = [];
        this.deck.push(this.startDeck);
        this.deck.push(this.weapon)
    }
}

/***********************
 * Get or create Player
 **********************/
let player = JSON.parse(localStorage['CC_player'] ?? JSON.stringify(new Player()));

localStorage['CC_player'] = JSON.stringify(player);

/***********************
 * Safe player
 **********************/
function safePlayer(){
    localStorage['CC_player'] = JSON.stringify(player);
}