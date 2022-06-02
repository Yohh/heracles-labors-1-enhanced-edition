// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import { Fighter } from "./src/Fighter.mjs";

let heracles = new Fighter("⚔️  Heracles", 20, 6);

let nemeanLion = new Fighter("🦁 Nemean lion", 11, 13);

const fight = (attacker, attacked) => {
    if (attacker.life > 0) {
  let damage =
    Math.ceil(Math.random() * attacker.strength) - attacked.dexterity;
  if (damage > 0) {
    attacked.life -= damage;
    if (attacked.life < 0) attacked.life = 0
    console.log(
      `${attacker.name} hits ${attacked.name}, ${attacked.name} life's left: ${attacked.life}`
    );
  } else {
    console.log(`${attacker.name} hits ${attacked.name}, ${attacked.name} has dodge`);
  }
}
};

for (let i = 0; (heracles.life > 0 && nemeanLion.life > 0); i++) {
    console.log(`round: ${i + 1}`);
    fight(heracles, nemeanLion);
    fight(nemeanLion, heracles);
}

heracles.life != 0 ? console.log("⚔️  Heracles wins!! 🏆") : console.log("🦁 Nemean lion wins!! 🏆")
