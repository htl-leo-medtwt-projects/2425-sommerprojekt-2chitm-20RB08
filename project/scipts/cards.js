/*********************
 * Card class
 ********************/
class Card{
    constructor(name, pic, physically, magie, blockPhysically, blockMagie, universalblock, isHero){
        this.name = name;
        this.pic = pic;
        this.physically = physically;
        this.magie = magie;
        this.blockPhysically = blockPhysically;
        this.blockMagie = blockMagie;
        this.universalblock = universalblock;
        this.isHero = isHero;
        this.backside = (isHero) ? '../img/heroCard/backside.png' : '../img/enemieCard/backside.png'
    }
}

/*********************
 * Herocard
 ********************/
// === ANGRIFF ===
const bash = new Card("Bash", "Bash.webp", 1, 0, 0, 0, 0, true);
const demolish = new Card("Demolish", "Demolish.webp", 3, 0, 0, 0, 0, true);
const eviscerate = new Card("Eviscerate", "Eviscerate.webp", 2, 0, 0, 0, 0, true);
const eyesClosedPunch = new Card("Eyes Closed Punch", "Eyes_Closed_Punch.webp", 1, 0, 0, 0, 0, true);
const fireblast = new Card("Fireblast", "Fireblast.webp", 0, 2, 0, 0, 0, true);
const luckyHit = new Card("Lucky Hit", "Lucky_Hit.webp", 2, 0, 0, 0, 0, true);
const slice = new Card("Slice", "Slice.webp", 2, 0, 0, 0, 0, true);
const smash = new Card("Smash", "Smash.webp", 2, 0, 0, 0, 0, true);
const smite = new Card("Smite", "Smite.webp", 0, 2, 0, 0, 0, true);

// === VERTEIDIGUNG ===
const counter = new Card("Counter", "Counter.webp", 0, 0, 2, 0, 0, true);
const cower = new Card("Cower", "Cower.webp", 0, 0, 0, 1, 0, true);
const divineShield = new Card("Divine Shield", "Divine_Shield.webp", 0, 0, 0, 10, 0, true);
const repel = new Card("Repel", "Repel.webp", 0, 0, 3, 0, 0, true);

// === BEIDES / SONSTIGES ===
const refresh = new Card("Refresh", "Refresh.webp", 0, 0, 0, 0, 0, true);
const rekindle = new Card("Rekindle", "Rekindle.webp", 0, 0, 1, 0, 0, true);
const uhh = new Card("Uhh...", "Uhh...webp", 0, 0, 0, 0, 0, true);


// Alle Karten in einem gemeinsamen Array
const attackCards = [
    bash,
    demolish,
    eviscerate,
    eyesClosedPunch,
    fireblast,
    luckyHit,
    slice,
    smash,
    smite
  ];
  
  const defenseCards = [
    counter,
    cower,
    divineShield,
    repel
  ];
  
  const bothCards = [
    refresh,
    rekindle,
    uhh
  ];
  
  // Anfagsdeck
  let startDeck = []
