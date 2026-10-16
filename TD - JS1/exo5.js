const prompt = require("prompt-sync")();

let poids = prompt("Quel est votre poids ?");
let taille = prompt("Quelle est votre taille ?");

poids = Number(poids);
taille = Number(taille);

const imc = (poids / (taille * taille)).toFixed(1);

if (imc < 18.5) {
    console.log(imc);
    console.log("Insuffisance pondérale");
} 
else if (imc<25) {
    console.log(imc);
    console.log("Corpulence normale");
}
else if (imc<30) {
    console.log(imc);
    console.log("Surpoids");
}
else {
    console.log(imc);
    console.log("Obésité");
}