var brPoteza = 1;
var brProverenog = 1;

var zadata = novaKombinacija();
// console.log(zadata);

var izabrana = [];

var gameOver = false;

function Simbol(naziv) { this.naziv = naziv; this.provereno = false; }

function nacrt() {
    var slike = ["karo", "pik", "skocko", "srce", "tref", "zvezda"];
    $("#simboli").empty();
    $("#ciklusi").empty();
    $("#resenje").empty();

    for (let i = 0; i < slike.length; i++) {
        $("#simboli").append(`
            <div onclick="potez(this)" id="${slike[i]}">
                <img src="slike/${slike[i]}.png">
            </div>
        `)
    }

    var brPolja = 1;
    var brProvere = 1;
    // 6 ciklusa u kojima se pokusava pogoditi kombinacija
    for (let i = 0; i < 6; i++) {

        for (let i = 0; i < 4; i++) {
            $("#ciklusi").append(`
                 <div class="polje" id="polje${brPolja}"></div>
            `);
            brPolja++;
        }

        for (let i = 0; i < 4; i++) {
            $("#ciklusi").append(`
                 <div class="provera" id="provera${brProvere}"></div>
            `);
            brProvere++;
        }
    }

    for (let i = 0; i < 4; i++) {
        $("#resenje").append(`
            <div id="resenje${i}"></div>
        `)

    }

}

function potez(e) {
    if (!gameOver) {
        $(`#polje${brPoteza}`).html(`<img src="slike/${$(e).attr('id')}.png">`);
        izabrana.push(new Simbol($(e).attr('id')));
        if (brPoteza % 4 == 0) {
            //console.log(izabrana);
            proveraKombinacije();
        }
        brPoteza++;
    }

}

function proveraKombinacije() {
    var naMestu = 0; // simboli koji su na mestu
    var postoje = 0; // pogodjeni simboli koji nisu na mestu


    // provera onih koji su na istom mestu
    for (let i = 0; i < 4; i++) {
        if (zadata[i].naziv == izabrana[i].naziv) {
            zadata[i].provereno = true;
            izabrana[i].provereno = true;
            naMestu++;
        } else {
            zadata[i].provereno = false;
        }
    }

    // provera onih koji nisu na istom mestu
    for (let i = 0; i < 4; i++) {
        if (zadata[i].provereno == false) {
            for (let j = 0; j < 4; j++) {
                if (zadata[i].naziv == izabrana[j].naziv
                    && izabrana[j].provereno == false) {
                    izabrana[j].provereno = true;
                    postoje++;
                    break;
                }
            }
        }
    }

    izabrana = [];

    // console.log("Pogodjeni na mestu " + naMestu);
    // console.log("Pogodjeni koji nisu na mestu " + postoje);

    rezultatCiklusa(naMestu, postoje);

    if (naMestu == 4 || brPoteza == 24) {
        ispisResenja();
        gameOver = true;
    }
}

function ispisResenja() {
    for (let i = 0; i < 4; i++) {
        $(`#resenje${i}`).append(`
            <img src="slike/${zadata[i].naziv}.png">
        `)

    }
}


function rezultatCiklusa(naMestu, postoje) {
    for (let i = 0; i < naMestu; i++) {
        $(`#provera${brProverenog}`).css("background-color", "red");
        brProverenog++;
    }
    for (let i = 0; i < postoje; i++) {
        $(`#provera${brProverenog}`).css("background-color", "yellow");
        brProverenog++;
    }
    brProverenog = brPoteza + 1;

}

function novaKombinacija() {
    var kom = [];
    for (let i = 0; i < 4; i++) {
        var random = Math.ceil(Math.random() * 60);
        if (random < 10) kom.push(new Simbol("karo"));
        else if (random < 20) kom.push(new Simbol("pik"));
        else if (random < 30) kom.push(new Simbol("skocko"));
        else if (random < 40) kom.push(new Simbol("srce"));
        else if (random < 50) kom.push(new Simbol("tref"));
        else kom.push(new Simbol("zvezda"));
    }
    return kom;
}

function restart() {
    zadata = novaKombinacija();
    brPoteza = brProverenog = 1;
    izabrana = [];
    gameOver = false;
    nacrt();
}

$(document).ready(function () {
    nacrt();
})

