const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
}

let heracles = new Fighter("⚔️  Heracles", 20, 6);

let nemeanLion = new Fighter("🦁 Nemean lion", 11, 13);

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
    (elem, index) => (elem.innerHTML = elem.innerHTML = array2[index])
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
    if (damage > 0) {
      attacked.life -= damage;
      if (attacked.life <= 0) attacked.life = "☠️";
      // console.log(
      //   `${attacker.name} hits ${attacked.name}, ${attacked.name} life's left: ${attacked.life}`
      // );
      updateHeraclesSheet();
      updateLionSheet();
    } else {
      // console.log(`${attacker.name} hits ${attacked.name}, ${attacked.name} has dodge`);
      updateHeraclesSheet();
      updateLionSheet();
    }
  }
};

for (let i = 0; heracles.life > 0 && nemeanLion.life > 0; i++) {
  // console.log(`round: ${i + 1}`);
  fight(heracles, nemeanLion);
  fight(nemeanLion, heracles);
}

// heracles.life != 0 ? console.log("⚔️  Heracles wins!! 🏆") : console.log("🦁 Nemean lion wins!! 🏆")
