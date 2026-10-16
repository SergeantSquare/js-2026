const prompt = require("prompt-sync")();

const choix = ["pierre", "feuille", "ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

let joueur = prompt(`Choisissez ${choix} `);

console.log(`Vous : ${joueur} / Ordinateur : ${ordi}`);

if (joueur === "pierre" || joueur === "feuille" || joueur === "ciseaux") {

    if (joueur == ordi) {
        console.log("Égalité");
    } else if ( /*1ere condition*/ joueur == "pierre" && ordi == "ciseaux" || /*2e condition*/ joueur == "feuille" && ordi == "pierre" || /*3e condition*/ joueur == "ciseaux" && ordi == "feuille") {
        console.log("Gagné");
    } else {
        console.log("Perdu");
    }

} else {

    console.log("Choix Invalide");

}
console.log(choix[0]);