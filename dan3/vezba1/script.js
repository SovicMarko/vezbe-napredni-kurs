// KOMBINATORIKA SLOZENIH TIPOVA PODATAKA

// nizovi 
var niz = ["Marko", 29, true, ["C#", "PHP", "JS"]];

console.log(niz[3][1]);

// niz nizova
var matrica = [
    [1, -5, 10],
    [6, 17, 8],
    [4, 15, -2]
]

console.log(matrica[2][0]);
console.table(matrica);

for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < matrica[i].length; j++) {
        console.log(matrica[i][j]);
    }
}

// niz funkcija
var nizFunkcija = [
    function () { console.log("a") },
    function () { console.log("b") },
    function () { console.log("c") },
    function () { console.log("d") }
]

nizFunkcija[2]();

for (let i = 0; i < nizFunkcija.length; i++) {
    nizFunkcija[i]();
}

// niz objekata
var osobe = [
    { ime: "Petar", prezime: "Petrovic", godiste: 2000 },
    { ime: "Marko", prezime: "Markovic", godiste: 1989 },
    { ime: "Jovana", prezime: "Jovanovic", godiste: 1979 },
    { ime: "Milica", prezime: "Milic", godiste: 1987 }
]

for (let i = 0; i < osobe.length; i++) {
    console.log(osobe[i].prezime);
}

class Polaznik {
    constructor(ime, prezime, zaposlen) {
        this.ime = ime;
        this.prezime = prezime;
        this.zaposlen = zaposlen;
    }

    ispis() {
        console.log(`${this.ime} ${this.prezime}`);
        if (this.zaposlen) {
            console.log("Osoba je zaposlena");
        } else {
            console.log("Osoba nije zaposlena");
        }
    }
}

var polaznici = [
    new Polaznik("Ivan", "Ivanovic", false),
    new Polaznik("Ana", "Jovanovic", true),
    new Polaznik("Vesna", "Visnjic", false)
]

for (let i = 0; i < polaznici.length; i++) {
    polaznici[i].ispis();
}


// funkcije

function ispisNiza(niz) {
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
}

function prvaFunkcija(a) {
    a();
}

prvaFunkcija(function () {
    console.log("Ovo je funkcija unutar funkcije");
})

setInterval(function () {
    console.log("Ovo je interval");
}, 2000);


