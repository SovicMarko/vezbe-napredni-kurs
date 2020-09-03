"use strict";

function proba() {
    alert("Dugme je kliknuto");
}


// length
var niz = [234, 54, 2, 23];
var ime = "Aleksandar";

console.log(niz.length);
console.log(ime.length);

// indexOf();
// vraca pocetnu poziciju stringa unutar stringa
// ako nije pronadjen string vraca -1
var poruka = "Danas je lep dan";

var pozicija = poruka.indexOf("lep");

console.log(pozicija);

// Napisati funkciju koja kao ulazni parametar 
// dobija string funkcija vraca true ukoliko 
// je dobijeni string u formi ispravne
// email adrese, suprotnom vraca false

function proveriMail(tekst) {
    if (tekst.indexOf('@') != -1)
        return true;
    else return false;
}

console.log(proveriMail("fsdkgfsdfg"));
console.log(proveriMail("@blabla.com"));

var natpis = "ovo je neki string koji nesto blabla";
var noviNatpis = natpis.slice(12, 20);

console.log(noviNatpis);

var natpis2 = natpis.substr(12, 6);
console.log(natpis2);

var pozdrav = "Danas nije lep dan";

var p = pozdrav.replace("nije", "je");
console.log(p);


var osoba = "marko markovic";
console.log(osoba.toUpperCase());
console.log(osoba.toLowerCase());

var ime = "Petar";
var prezime = "Petrovic";

osoba = ime.concat(" ", prezime);

console.log(osoba);

var string = "     Ovde nesto pise        ";
console.log(string.trim());

var nastavnik = "Marko";

console.log(nastavnik.charAt(3));


// Napisati funkciju koja od korisnika zahteva
// unos neke recenice, nakon unosa, na stranici
// se ispisuje koliko ima samoglasnika
// u recenici.

function brSamoglasnika() {
    var recenica = prompt("Unesite recenicu");
    var i = 0;
    var brSamoglasnika = 0;
    while (i < recenica.length) {
        if (recenica.charAt(i).toLowerCase() == "a" ||
            recenica.charAt(i).toLowerCase() == "e" ||
            recenica.charAt(i).toLowerCase() == "i" ||
            recenica.charAt(i).toLowerCase() == "o" ||
            recenica.charAt(i).toLowerCase() == "u"
        )
            brSamoglasnika++;
        i++;
    }

    document.write("Broj samoglasnika: " + brSamoglasnika)
}



// Funkcije sa brojevima
var rez = 100 / 3
console.log(rez.toFixed(2));
console.log(rez.toPrecision(5));


// Konvertovanje iz stringa u broj i obratno

var sBroj = "32546.45";
console.log(sBroj);
console.log(Number(sBroj));
console.log(parseInt(sBroj)); // vraca ceo broj (Integer)
console.log(parseFloat(sBroj)); // vraca broj sa decimalama

var broj = 234;
console.log(broj);
console.log(broj.toString());
console.log(broj + "");

// Math - objekat
console.log(Math.sqrt(64)); // kvadratni koren
console.log(Math.pow(8, 4)); // stepenovanje
console.log(Math.random()); // nasumicna vrednost od 0 do 1
console.log(Math.PI);
console.log(Math.floor(45.9)); // 45 patos vrednost 
console.log(Math.ceil(45.1)); // 46 plafon vrednost 
console.log(Math.round(45.3)); // zaokruzuje


// Na stranici napraviti dugme koje pokrece igru
// racunar nasumicno odredjuje broj od 1 do 10,
// od korisnika se zahteva unos, odn. da pogodi 
// zadati broj
// sve dok korisnik ne pogodi broj, ponavlja se zahtev za unos
// kada je broj pogodjen na stranici se ispisuje
// uspesno ste pogodili broj, i ispisuje se broj pokusaja

function pogodiBroj() {
    var nasumicni = Math.floor(Math.random() * 10 + 1);
    var unos = -1;
    var brPokusaja = 0;
    while (unos != nasumicni) {
        unos = prompt("Pogodite zadati broj");
        brPokusaja++;
    }
    document.write("Cestitamo! uspesno ste pogodili broj");
    document.write("<br>Broj pokusaja: " + brPokusaja);
}

// Funkcije sa nizovima

var nekiNiz = ["Marko", 28, true];

nekiNiz.push("Nesto"); // dodaje na kraj niza

console.log(nekiNiz);

nekiNiz.pop(); // izbacuje poslednji element niza

console.log(nekiNiz);

nekiNiz.shift(); // izbacuje prvi element niza

console.log(nekiNiz);

nekiNiz.unshift("Ana"); // dodaje na pocetak niza

console.log(nekiNiz);

delete nekiNiz[2]; // brise element i ostavlja prazno mesto u nizu

console.log(nekiNiz);

nekiNiz.splice(1, 1); // brise bez ostaljanja praznih mesta

console.log(nekiNiz);

nekiNiz.splice(1, 1, "Solja", 45);

console.log(nekiNiz);

nekiNiz.splice(2, 0, true);

console.log(nekiNiz);

// Napraviti jednostavan to-do program (planer)
// Korisniku je na stranici dato input polja za unos
// kao i dugme potvrdi
// nakon unosa, uneta stavka se pokazuje u nenumerisanoj
// listi ispod.
// Unete stavke se mogu brisati, klikom na dugme pored stavke

var stavke = [];

function potvrdaUnosa() {
    var unos = document.getElementById("unos");
    stavke.push(unos.value);
    unos.value = "";
    console.log(stavke);
    ispisListe();
}

function ispisListe() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (let i = 0; i < stavke.length; i++) {
        lista.innerHTML += "<li>" + stavke[i] +
            " <button onclick='brisanje(" + i + ")'>X</button> </li>";
    }
}

function brisanje(index) {
    stavke.splice(index, 1);
    ispisListe();
}

// konvertovanje stringa u niz

var nekaPoruka = "ovo je neki string";
var nizA = nekaPoruka.split("");
console.log(nizA);

// Napisati funkciju koja za broj koji je zadat kao ulazni parametar
// racuna i ispisuje zbir njegovih cifara
// npr za broj 357 -> 15

function zbirCifara(broj) { // 345
    var s = broj.toString(); // "345"
    var n = s.split(""); // ["3", "4", "5"]
    var zbir = 0;
    for (let i = 0; i < n.length; i++) {
        zbir += parseInt(n[i]);
    }
    console.log(zbir);
}

zbirCifara(12456);

var x = 5;
var y = 10;
console.log("Broj x ima vrednost " + x + ", a broj y ima vrednost " + y);
console.log(`Broj x ima vrednost ${x}, a broj y ima vrednost ${y}`);

// napraviti dugme, na koje se klikom nasumicno menja boja pozadine

function oboji() {
    var e = document.getElementsByTagName("body")[0];
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    e.style.backgroundColor = `rgb(${r},${g},${b})`;
}