const prompt = require("prompt-sync")();

let joueur = prompt("Choisissez un nombre ");
let somme = 0

joueur = Number(joueur);

for (i=0 ; i<11 ; i++) {
    console.log(i);
}

for (i=0 ; i<21 ; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

for (i=1 ; i<11 ; i++) {
    console.log(joueur + " x " + i + " = " + i*joueur);
} 

for (o=1 ; o<101 ; o++) {
    somme += o
    console.log(somme);
}