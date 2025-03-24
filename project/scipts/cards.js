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
// Einzelne Karten erstellen
const bash = new Card("Bash", "Bash.webp", 1, 0, 0, 0, 0, true);
const counter = new Card("Counter", "Counter.webp", 0, 0, 2, 0, 0, true);
const demolish = new Card("Demolish", "Demolish.webp", 3, 0, 0, 0, 0, true);
const divineShield = new Card("Divine Shield", "Divine_Shield.webp", 0, 0, 0, 0, 2, true);
const eviscerate = new Card("Eviscerate", "Eviscerate.webp", 2, 0, 0, 1, 0, true);
const fireblast = new Card("Fireblast", "Fireblast.webp", 0, 2, 0, 0, 0, true);
const refresh = new Card("Refresh", "Refresh.webp", 0, 0, 0, 0, 0, true); // evtl. Heilung
const rekindle = new Card("Rekindle", "Rekindle.webp", 0, 0, 1, 0, 0, true); // evtl. Block oder Heilung
const repel = new Card("Repel", "Repel.webp", 0, 0, 3, 0, 0, true);
const slice = new Card("Slice", "Slice.webp", 2, 0, 0, 0, 0, true);
const smash = new Card("Smash", "Smash.webp", 2, 0, 0, 0, 0, true);
const smite = new Card("Smite", "Smite.webp", 0, 2, 0, 0, 0, true);
const uhh = new Card("Uhh...", "Uhh.webp", 0, 0, 0, 0, 0, true); // evtl. Spezialeffekt

// Alle Karten in einem gemeinsamen Array
const allHeroCards = [
    bash,
    counter,
    demolish,
    divineShield,
    eviscerate,
    fireblast,
    refresh,
    rekindle,
    repel,
    slice,
    smash,
    smite,
    uhh
];
