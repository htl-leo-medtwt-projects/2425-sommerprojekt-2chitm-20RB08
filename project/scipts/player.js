

/*************************
 * New Player
 **************************/
let newPlayer = {
    name: 'Held',
    health: 5,
    deck: [],
    startDeck: startdeck[Math.floor(Math.random() * startdeck.length)],
    gold: 0,

    // Buyed Loot
    weaponArr: [],
    armorArr: [],
    skilArr: [],
    // loot Cards
    weapon: null,
    armor: null,
    skil: null,

    getAllCard: function () {
        this.deck = [];
        this.deck.push(this.startDeck),
            this.deck.push(this.weapon);
        this.deck.push(this.armor);
        this.deck.push(this.skil);
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
        this.skill = [];

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
let player = JSON.parse(localStorage['CC_player'] ?? newPlayer);

localStorage['CC_player'] = JSON.stringify(player);

