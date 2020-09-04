// Sintaksa za kreiranje pojadinacnih objekata

var x = {}; // prazan objekat
console.log(x);

var ime = "Marko";
var prezime = "Markovic";
var godiste = 1990;

// primer pojedinacnog objekta
var osoba = {
    ime: "Petar",
    prezime: "Petrovic",
    godiste: 1980,
    zaposlen: false,
    zanimanje: "trgovac",
    radnoIskustvo: ["Maxi", "Roda", "Idea"],
    pozdrav: function () {
        console.log(`Pozrav ja sam ${this.ime} ${this.prezime}`);
    },
    adresa: {
        ulica: "Radnicka",
        broj: 9,
        grad: "Novi Sad",
        ispis: function () {
            console.log(`${this.ulica} ${this.broj} ${this.grad}`);
        }
    },
    automobil: { boja: "crvena" },
    proba: function () {
        console.log(this);
    }
}

console.log(osoba);
console.log(osoba.ime);
console.log(osoba.zaposlen);
osoba.pozdrav("Jovan");
osoba.adresa.ispis();
console.log(osoba.adresa.grad);


console.log();

console.log(this);
osoba.proba();

function proba(e) {
    console.log(e);
}


var el = document.getElementsByTagName("input")[0];
console.log(el.type);
console.log(el.maxLength);
console.log(el.className);
console.log(el.id);