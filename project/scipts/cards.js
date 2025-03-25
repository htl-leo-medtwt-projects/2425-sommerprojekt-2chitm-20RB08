/**********************
 * Card Klass
 **********************/
class Card {
  constructor(name, attack, magie, attackBlock, magieBlock, universalBlock, live, img) {
    this.name = name;
    this.attack = attack;
    this.magie = magie;
    this.attackBlock = attackBlock;
    this.magieBlock = magieBlock;
    this.universalBlock = universalBlock;
    this.live = live;
    this.img = img;
  }
}

/**********************
 * HeroCard
 **********************/
const bash = new Card("Bash", 1, 0, 1, 0, 0, 0, "../img/heroCard/Bash.webp");
const counter = new Card("Counter", 0, 0, 2, 0, 0, 0, "../img/heroCard/Counter.webp");
const cower = new Card("Cower", 0, 0, 0, 1, 0, 0, "../img/heroCard/Cower.webp");
const demolish = new Card("Demolish", 3, 0, 0, 0, 0, 0, "../img/heroCard/Demolish.webp");

const divineShield = new Card("Divine Shield", 0, 0, 0, 0, 2, 0, "../img/heroCard/Divine_Shield.webp");
const eviscerate = new Card("Eviscerate", 2, 0, 0, 1, 0, 0, "../img/heroCard/Eviscerate.webp");
const eyesClosedPunch = new Card("Eyes Closed Punch", 1, 0, 0, 0, 0, 0, "../img/heroCard/Eyes_Closed_Punch.webp");
const fireblast = new Card("Fireblast", 0, 2, 0, 0, 0, 0, "../img/heroCard/Fireblast.webp");

const luckyHit = new Card("Lucky Hit", 2, 0, 0, 0, 0, 0, "../img/heroCard/Lucky_Hit.webp");
const refresh = new Card("Refresh", 0, 0, 0, 0, 0, 2, "../img/heroCard/Refresh.webp");
const rekindle = new Card("Rekindle", 0, 0, 1, 0, 0, 1, "../img/heroCard/Rekindle.webp");
const repel = new Card("Repel", 0, 0, 3, 0, 0, 0, "../img/heroCard/Repel.webp");

const slice = new Card("Slice", 2, 0, 0, 0, 0, 0, "../img/heroCard/Slice.webp");
const smash = new Card("Smash", 2, 0, 1, 0, 0, 0, "../img/heroCard/Smash.webp");
const smite = new Card("Smite", 0, 2, 1, 0, 0, 0, "../img/heroCard/Smite.webp");
const uhh = new Card("Uhh...", 0, 0, 0, 0, 0, 0, "../img/heroCard/Uhh.webp");
const oi = new Card("Oi!", 1, 0, 0, 0, 0, 0, "../img/heroCard/Oi.webp");
const youTryinSomething = new Card("You tryin' something?", 0, 0, 2, 0, 0, 0, "../img/heroCard/You_Tryin_Something.webp");
const getOuttaHere = new Card("Get outta here", 0, 0, 2, 0, 0, 0, "../img/heroCard/Get_Outta_Here.webp");
const howDoYouLikeThis = new Card("How do you like this?", 1, 0, 1, 0, 0, 0, "../img/heroCard/How_Do_You_Like_This.webp");
const niceTryChump = new Card("Nice try, chump", 1, 0, 1, 0, 0, 0, "../img/heroCard/Nice_Try_Chump.webp");
const fireShield = new Card("Fire shield", 0, 1, 0, 1, 0, 0, "../img/heroCard/Fire_Shield.wedp");

const allHeroCards = [
  bash, counter, cower, demolish,
  divineShield, eviscerate, eyesClosedPunch, fireblast,
  luckyHit, refresh, rekindle, repel,
  slice, smash, smite, uhh
];

// 3 starddecks
const startdeck = [
  [eyesClosedPunch, eyesClosedPunch, eyesClosedPunch, luckyHit, cower, cower],
  [oi, oi, youTryinSomething, getOuttaHere, getOuttaHere, niceTryChump],
  [fireShield, fireShield, niceTryChump, niceTryChump, rekindle, smite, uhh]
]