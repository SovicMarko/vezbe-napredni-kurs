// Klase objekata
// - mogu se kreirati upotrebom konstruktor funkcije
// - pomocu ES6 class sintakse

// KONSTRUKTOR FUNKCIJA

function Osoba(ime, prezime, godiste, zanimanje) {

    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
    this.zanimanje = zanimanje;

    this.pozdrav = function () {
        console.log(`Pozrav ja sam ${this.ime} ${this.prezime}`);
    }

    this.starost = function (trenutnaGodina) {
        return trenutnaGodina - this.godiste;
    }
}

var osoba1 = new Osoba("Petar", "Petrovic", 1980, "trgovac");
var osoba2 = new Osoba("Jovan", "Jovanovic", 1976, "taksista");
var osoba3 = new Osoba("Milica", "Milic", 1979, "viljuskarista");

osoba1.pozdrav();
osoba2.pozdrav();
osoba3.pozdrav();

console.log(osoba2);

console.log(osoba3.starost(2020));;

// ES6 CLASS sintaksa

class Polaznik {

    constructor(ime, prezime, godiste, zanimanje) {
        this.ime = ime;
        this.prezime = prezime;
        this.godiste = godiste;
        this.zanimanje = zanimanje;
    }

    pozdrav() {
        console.log(`Pozrav ja sam ${this.ime} ${this.prezime}`);
    }

    starost(trenutnaGodina) {
        return trenutnaGodina - this.godiste;
    }
}

var polaznik1 = new Polaznik("Petar", "Petrovic", 1980, "trgovac");
var polaznik2 = new Polaznik("Jovan", "Jovanovic", 1976, "taksista");
var polaznik3 = new Polaznik("Milica", "Milic", 1979, "viljuskarista");


polaznik1.pozdrav();
polaznik2.pozdrav();
polaznik3.pozdrav();

// --------------------------------------------

// 1. Definisati klasu pravougaonik, koja ima atribute a, b, obim, povrsina
// U konstruktoru klase dobijaju se vrednosti stranica i postavljaju vrednosti
// svih atributa (obim i povrsina se proracunavaju)
// klasa ima metod Ispis koji vraca HTML divajder stilizovan na osnovu vrednosti atributa

const el = document.getElementById("polje");

class Pravougaonik {
    constructor(a, b) {
        this.a = Number(a);
        this.b = Number(b);
        this.o = 2 * (this.a + this.b);
        this.p = this.a * this.b;
        el.innerHTML += this.ispis();
    }

    ispis() {
        return (
            `<div style='width: ${this.a}px; height: ${this.b}px;'> 
                Obim: ${this.o}<br>
                Povrsina: ${this.p}
            </div>`
        )
    }
}

// var p1 = new Pravougaonik(300, 400);
// var p2 = new Pravougaonik(500, 100);
// var p3 = new Pravougaonik(700, 1000);

function dodajPravougaonik() {
    var a = prompt("Unesite stranicu A");
    var b = prompt("Unesite stranicu B");
    new Pravougaonik(a, b);
}

// Kreirati klasu (upotrebom ES6 sintakse) pod nazivom Knjiga
// klasa ima atribute: naslov, cena, 
// autor, godinaIzdanja, izdavac, tiraz,
// tvrdiPovez(bool).
// kreirati konstruktor kojim se dodeljuju vrednosti atributa
// preko ulaznih parametara.
// kreirati metod Ispis unutar klase koji u konzoli ispisuje
// vrednosti atributa autor i godina izdanja.
// Kreirati metod jeUkoricena() koji ispisuje "knjiga je ukoricena" ili 
// "knjiga nije ukoricena" na osnovu vrednosti atribua tvrdiPovez