var app = new Vue({
    el: "#app",
    data: {
        ime: "Marko",
        broj: 1,
        godine: 28,
        brojac: 1,
        link: "https://www.google.com",
        boja: "#ff0000",
        website: "<a href='https://webeducentarns.web.app/#/'>Web programiranje i dizajn</a>",
        prikazano: false,
        stilizovano: false,
        okvir: false,
        osobe: ['Dusan', 'Martin', 'Aleksandra', 'Zeljko', 'Jovana'],
        grad: "Novi Sad",
        novaOsoba: "",
        adresa: {
            ulica: "Radnicka",
            broj: 5,
            grad: "Novi Sad"
        },
        artikli: [
            {
                name: "AMD Powercolor 4GB AXRX 570 4GBD5, bulk",
                price: 19490,
                image: "https://www.winwin.rs/media/catalog/product/420x420/154/31/154317_5efc3eefd3d61.png",
            },
            {
                name: "GeForce GTX1650 Inno3D Twin X2 4GB",
                price: 18490,
                image: "https://www.winwin.rs/media/catalog/product/865/52/8655219.jpg",
            },
            {
                name: "GeForce GTX1660Ti ZOTAC GAMING ",
                price: 37490,
                image: "https://www.winwin.rs/media/catalog/product/420x420/864/49/8644970.jpg",
            },
            {
                name: "Sapphire PULSE RX 5500 XT 8G ",
                price: 27000,
                image: "https://www.winwin.rs/media/catalog/product/420x420/153/50/153504_5edf50a606375.jpg",
            },
        ]
    },
    methods: {
        pozdrav: function (doba) {
            return `Dobar ${doba}`;
        },
        povecaj: function () {
            if (this.brojac < 10) {
                this.brojac++;
            }
        },
        smanji: function () {
            if (this.brojac > 1) {
                this.brojac--;
            }
        },
        promeniLink: function () {
            this.link = "https://www.youtube.com"
        },
        unosOsobe: function () {
            this.osobe.push(this.novaOsoba);
            this.novaOsoba = "";
        }
    }
})


var ime = "Marko";
$("#ime").html(ime);

var broj = 1;

function Ispis() {
    $("#broj").html(broj);
}

Ispis();

$("#dugme").click(function () {
    broj++;
    Ispis();
});

var godine = 28;
function ispisGodina() {
    $("#godineIspis").html(godine);
}


function proveraPonoletstva() {
    if (godine >= 18) {
        $("#godine").html("Osoba je punoletna");
    }
    else {
        $("#godine").html("Osoba je maloletna");
    }
}

proveraPonoletstva();
ispisGodina();

$("#smanji").click(function () {
    godine--;
    proveraPonoletstva();
    ispisGodina();
})

$("#povecaj").click(function () {
    godine++;
    proveraPonoletstva();
    ispisGodina();
})



// // globalna promenljiva
// let a = 90;


// function name(params) {
//     console.log(a);
//     // lokalna promenljiva
//     let b = 90;
// }


// name();
// // console.log(b);


// if (a > 89) {
//     var c = 80;
// } else {
//     var c = 78;
// }

// console.log(c);


