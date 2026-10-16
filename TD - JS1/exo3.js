let prixHT = 49.9;
const tva = 0.2;

console.log(`TVA : ${prixHT*tva}€`);
console.log(`TTC : ${(prixHT+(prixHT*tva)).toFixed(2)}€`);