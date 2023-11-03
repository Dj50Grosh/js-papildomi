/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augaluMasyvas = ["Astra", "Baklazanas", "Cukinija", "Agurkas", "Aguona", "Figmadis", "Magnolija", "Moliugas", "Saulegraza", "Dagys"]

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
console.log("Augalu sarasas nuo pradziu:")
for(let i = 0; i < augaluMasyvas.length; i++) {
    console.log("Augalas:", augaluMasyvas[i]);
}

console.log("_____uzd 3_______")
/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

console.log("Augalu sarasas nuo galo:")
for(let i = augaluMasyvas.length - 1; i >= 0; i--) {
    console.log("Augalas:", augaluMasyvas[i]);
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/