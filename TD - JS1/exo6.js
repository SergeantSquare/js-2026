const prompt = require("prompt-sync")();

let age = prompt("Quel est votre âge ?");

age = Number(age);


if (isNaN(age)==true) {
    console.log("Saisie Invalide");
}
else if (age>=18 && age<65) {
    console.log("Majeur");
} 
else if (age>=65) {
    console.log("Senior");
}
else {
    console.log("Mineur");
}