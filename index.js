const MAX_LIFE = 30;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.hit = "";
    this.dodge = "";
  }
}

let heracles = new Fighter("⚔️  Heracles", 20, 6);
heracles.hit = 'heracles_attacks.jpg';
heracles.dodge = "heraclesDodge.jpg";

let nemeanLion = new Fighter("🦁 Nemean lion", 11, 13);
nemeanLion.hit = 'lion_Attacks.webp';
nemeanLion.dodge = "lionDodge.jpg";

//
//
//
//
// DOM
//
//
//
//

//________________________________________________________________________________________

const shape = document.querySelector(".shape");
const heraclesSheet = document.querySelector(".heraclesSheet");
const battleArena = document.querySelector(".battleArena");
const nemeanLionSheet = document.querySelector(".nemeanLionSheet");
const actionText = document.querySelector(".actionText");
const resultText = document.querySelector(".resultText");
const result = document.querySelector(".result");

//_________________________________________________________________________________________

// feuille de personnage Heracles
const heraclesCarac = document.querySelectorAll(".heracles");
// création tableau à partir de heracles pour intégrer les éléments dans heraclesCarac
let array1 = [];
// fonction pour mettre à jour la feuille
const updateHeraclesSheet = () => {
  array1 = [];
  Object.keys(heracles).forEach((key) => array1.push(heracles[key]));
  heraclesCarac.forEach((elem, index) => (elem.innerHTML = array1[index]));
};
updateHeraclesSheet();

//__________________________________________________________________________________________

//feuille de personnage Lion de Némée
const nemeanLionCarac = document.querySelectorAll(".nemeanLion");
// création tableau à partir de nemeanLion pour intégrer les éléments dans nemeanLionCarac
let array2 = [];
// fonction pour mettre à jour la feuille
const updateLionSheet = () => {
  array2 = [];
  Object.keys(nemeanLion).forEach((key) => array2.push(nemeanLion[key]));
  nemeanLionCarac.forEach(
    (elem, index) => (elem = elem.innerHTML = array2[index])
  );
};
updateLionSheet();

//__________________________________________________________________________________________

//
//
//
//
// FIGHT
//
//
//
//

const fight = (attacker, attacked) => {
  if (attacker.life > 0) {
    let damage =
      Math.ceil(Math.random() * attacker.strength) - attacked.dexterity;
    actionText.innerHTML = `${attacker.name} hits ${attacked.name}`;
    if (damage > 0) {
      attacked.life -= damage;
      resultText.innerHTML = `${attacked.name} takes ${damage} damages `;
      battleArena.style.backgroundImage = `url(${attacker.hit} )`
      if (attacked.life <= 0) {
        attacked.life = "☠️";
        if (heracles.life != "☠️") {
          battleArena.style.backgroundImage = "url('heraclesVictory.jpg')";
          actionText.innerHTML = "⚔️  Heracles wins!! 🏆";
        } else {
          battleArena.style.backgroundImage = "url('lionVictory.jpg')";
          actionText.innerHTML = "🦁 Nemean lion wins!! 🏆";
        }
        result.style.display = "none";
        clearInterval(match);
      }
      updateHeraclesSheet();
      updateLionSheet();
    } else {
      resultText.innerHTML = `${attacked.name} has dodge`;
      battleArena.style.backgroundImage = `url(${attacked.dodge}`;
      updateHeraclesSheet();
      updateLionSheet();
    }
  }
};

let round = 0;

const battle = () => {
  round++;
  if (round % 2 === 0) {
    fight(heracles, nemeanLion);
  } else {
    fight(nemeanLion, heracles);
  }
};

let match = setInterval(battle, 1000);
