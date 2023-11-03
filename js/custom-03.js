/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for(let a = 1; a <= 10; a++) {
    console.log('labas')
}
console.log()

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for(let b = 0; b <= 9; b++) {
    console.log(b)
}
console.log()

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for(let c = 10; c <= 50; c += 2){
    console.log(c)
}
console.log()

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for(let d = 10; d <= 50; d += 2) {
    if(d % 10 == 0) {
        console.log();
        continue;
    }
    console.log(d);
}
console.log()

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/