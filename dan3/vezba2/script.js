class Korisnik {
    constructor(ime, prezime, godiste, status, pozicija) {
        this.ime = ime;
        this.prezime = prezime;
        this.godiste = godiste;
        this.status = status;
        this.pozicija = pozicija;
    }

    ispis() {
        var status = "";
        if (this.status == "true") status = "Osoba je zaposlena";
        else status = "Osoba nije zaposlena"

        return (
            `<div class='kartica'>
                <h3>${this.ime} ${this.prezime}</h3>
                <h4>Godiste: ${this.godiste}</h4>
                <h4>${status}</h4>
                <span onclick="brisanje(${this.pozicija})">X</span>
             </div>`
        )
    }
}

var korisnici = [];


function potvrda() {
    var obrazac = document.obrazac;
    var ime = obrazac.ime;
    var prezime = obrazac.prezime;
    var godiste = obrazac.godiste;
    var status = obrazac.status;

    korisnici.push(
        new Korisnik(ime.value, prezime.value,
            godiste.value, status.value, korisnici.length))
    ime.value = prezime.value = godiste.value = status.value = "";
    ispis();
    upisUBazu();
}


function ispis() {
    var e = document.getElementById("korisnici");
    e.innerHTML = "";
    for (let i = 0; i < korisnici.length; i++) {
        e.innerHTML += korisnici[i].ispis();
    }
}


function brisanje(i) {
    korisnici.splice(i, 1);
    ispis();
    upisUBazu();
}



function upisUBazu() {
    var trenutno = [];
    for (let i = 0; i < korisnici.length; i++) {
        trenutno[i] = {
            ime: korisnici[i].ime,
            prezime: korisnici[i].prezime,
            godiste: korisnici[i].godiste,
            status: korisnici[i].status
        }
    }
    window.localStorage.baza = JSON.stringify(trenutno);
}

function procitajIzBaze() {
    var trenutno = JSON.parse(window.localStorage.baza);
    for (let i = 0; i < trenutno.length; i++) {
        korisnici.push(new Korisnik(trenutno[i].ime, trenutno[i].prezime,
            trenutno[i].godiste, trenutno[i].status, i))
    }
    ispis();
}


// JSON
// da li postoji u lacalStorage-u baza, 
// ako ne postoji kreiramo je, ako postoji onda je procitamo
if (window.localStorage.baza == undefined) {
    window.localStorage.baza = "{}";
} else {
    procitajIzBaze();
}


console.log(window.localStorage.baza);

