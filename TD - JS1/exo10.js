/*for (i=1 ; i<6 ; i++) {
    let note = prompt(`${i} / 5 - Donnez une note `); 
    note = Number(note);
    total += note;
    
}*/

const prompt = require("prompt-sync")();

let total = 0;
let max = 0;
let notes = [];

for (let i=0 ; i<5 ; i++) {
    notes[i] = prompt(`${i+1} / 5 - Donnez une note `); 
    notes[i] = Number(notes[i]);
    console.log(notes[i]);

    total += notes[i];

    max = Math.max(...notes);
    
}

let moyenne = total / notes.length

if (moyenne >= 10) {
    console.log("Admis");
} else {
    console.log("Refusé")
}

console.log("Votre moyenne est "+ moyenne);
console.log("Note maximal "+ max);