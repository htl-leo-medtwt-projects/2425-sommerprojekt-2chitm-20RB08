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
const counter = new Card("Counter", 2, 0, 1, 0, 0, 0, "../img/heroCard/Counter.webp");
const cower = new Card("Cower", 0, 0, 0, 0, 1, 0, "../img/heroCard/Cower.webp");
const demolish = new Card("Demolish", 4, 0, 2, 0, 0, 0, "../img/heroCard/Demolish.webp");

const divineShield = new Card("Divine Shield", 0, 3, 0, 10, 0, 0, "../img/heroCard/Divine_Shield.webp");
const eviscerate = new Card("Eviscerate", 3, 0, 0, 1, 0, 0, "../img/heroCard/Eviscerate.webp");
const eyesClosedPunch = new Card("Eyes Closed Punch", 1, 0, 0, 0, 0, 0, "../img/heroCard/Eyes_Closed_Punch.webp");
const fireblast = new Card("Fireblast", 0, 1, 0, 1, 0, 0, "../img/heroCard/Fireblast.webp");

const luckyHit = new Card("Lucky Hit", 2, 0, 0, 0, 0, 0, "../img/heroCard/Lucky_Hit.webp");
const refresh = new Card("Refresh", 0, 0, 0, 0, 0, 6, "../img/heroCard/Refresh.webp");
const rekindle = new Card("Rekindle", 0, 1, 0, 0, 0, 1, "../img/heroCard/Rekindle.webp");
const repel = new Card("Repel", 0, 0, 3, 0, 0, 0, "../img/heroCard/Repel.webp");

const aspectOfTheBull = new Card("Aspect Of The Bull", 2, 0, 0, 0, 0, 0, "../img/heroCard/aspectOfTheBull.png");
const flaskOfHealing = new Card("Flask of Healing", 0, 0, 0, 0, 0, 1, "../img/heroCard/flaskOfHealing.jpg");

const slice = new Card("Slice", 2, 0, 0, 0, 0, 0, "../img/heroCard/Slice.webp");
const smash = new Card("Smash", 3, 0, 1, 0, 0, 0, "../img/heroCard/Smash.webp");
const smite = new Card("Smite", 0, 2, 0, 1, 0, 0, "../img/heroCard/Smite.webp");
const uhh = new Card("Uhh...", 0, 0, 0, 0, 0, 0, "../img/heroCard/Uhh.webp");
const oi = new Card("Oi!", 1, 0, 0, 0, 0, 0, "../img/heroCard/Oi.webp");
const youTryinSomething = new Card("You tryin' something?", 0, 0, 2, 0, 0, 0, "../img/heroCard/You_Tryin_Something.webp");
const getOuttaHere = new Card("Get outta here", 1, 0, 1, 0, 0, 0, "../img/heroCard/Get_Outta_Here.webp");
const howDoYouLikeThis = new Card("How do you like this?", 1, 0, 0, 0, 0, 0, "../img/heroCard/How_Do_You_Like_This.webp");
const niceTryChump = new Card("Nice try, chump", 0, 0, 0, 2, 0, 0, "../img/heroCard/Nice_Try_Chump.webp");
const fireShield = new Card("Fire shield", 0, 1, 0, 1, 0, 0, "../img/heroCard/Fire_Shield.webp");

const allHeroCards = [
  bash, counter, cower, demolish,
  divineShield, eviscerate, eyesClosedPunch, fireblast,
  luckyHit, refresh, rekindle, repel,
  slice, smash, smite, uhh, oi, youTryinSomething, getOuttaHere,
  howDoYouLikeThis, niceTryChump, fireShield,
  aspectOfTheBull, flaskOfHealing
];

// 3 starddecks
const startdeckOptions = [
  [eyesClosedPunch, eyesClosedPunch, eyesClosedPunch, luckyHit],
  [oi, oi, youTryinSomething, getOuttaHere, getOuttaHere, niceTryChump],
  [fireShield, fireShield, niceTryChump, niceTryChump, rekindle, smite, uhh]
]

/**********************
 * Enemie Card
 **********************/
// Albino Goblin lv1/index: 0
const anger = new Card("Anger", 1, 0, 0, 0, 0, -1, "../img/enemieCard/anger.webp");
const lunge = new Card("Lunge", 2, 0, 0, 0, 0, 0, "../img/enemieCard/lunge.webp"); // Spezialeffekt evtl. extra behandeln
const pain = new Card("Pain", 0, 2, 0, 0, 0, 0, "../img/enemieCard/pain.webp");
const thrash = new Card("Thrash", 3, 0, 0, 0, 0, -1, "../img/enemieCard/thrash.webp");
const torment = new Card("Torment", 0, 3, 1, 0, 0, 0, "../img/enemieCard/torment.webp");
const albinoGoblinDeck = [
  anger, anger,
  lunge, lunge,
  pain,
  thrash,
  torment
];

// Mummy lv2/index 1
const headbutt = new Card("Headbutt", 2, 0, 0, 0, 0, -1, "../img/enemieCard/headbutt.webp");
const sweepingBlast = new Card("Sweeping Blast", 0, 2, 0, 1, 0, 0, "../img/enemieCard/sweepingBlast.webp")
const mummyDeck = [
    sweepingBlast,
    pain, pain,
    torment,
    anger,
    headbutt, headbutt
]

// Bandito lv3/index: 2
const strike = new Card("Strike", 1, 0, 0, 0, 0, 0, "../img/enemieCard/strike.webp");
const headBlow = new Card("Head Blow", 1, 0, 0, 0, 0, 0, "../img/enemieCard/headBlow.png");
const parry = new Card("Parry", 2, 0, 1, 0, 0, 0, "../img/enemieCard/parry.webp");
const stagger = new Card("Stagger", 2, 0, 0, 0, 0, 0, "../img/enemieCard/stagger.webp");
const swipe = new Card("Swipe", 3, 0, 2, 0, 0, 0, "../img/enemieCard/swipe.webp");
const banditoDeck = [
  strike,
  headBlow,
  parry,
  stagger,
  swipe,
]

// Embro lv6/index:5
const bodySlam = new Card("Body Slam", 3, 0, 0, 0, 0, -1, "../img/enemieCard/bodySlam.webp");
const fieryWeapon = new Card("Fiery Weapon", 1, 1, 0, 0, 0, 0, "../img/enemieCard/fieryWeapon.webp");
const fireball = new Card("Fireball", 0, 2, 0, 0, 0, 0, "../img/enemieCard/fireball.webp");
const blaze = new Card("Blaze", 0, 3, 0, 0, 0, 0, "../img/enemieCard/blaze.webp");
const embroDeck = [
  headbutt,
  bodySlam, bodySlam,
  parry,
  stagger,
  swipe,
  fieryWeapon,
  fireball,
  blaze
]