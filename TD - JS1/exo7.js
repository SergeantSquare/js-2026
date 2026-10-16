const prompt = require("prompt-sync")();

let age = prompt("Quel est votre âge ? ");
let jour = prompt("Réservation pour quel jour ? (minuscule) ");
let parent = prompt("Êtes-vous accompagnés d'un adulte ");

age = Number(age);

if (jour == "mercredi") {
    console.log("Tarif : 6 €");
} else if (age < 12 && parent == "oui") {
    console.log("Tarif : 5 €");
} else if (age <= 25) {
    console.log("Tarif : 7 €");
} else {
    console.log("Tarif : 10 €");
}