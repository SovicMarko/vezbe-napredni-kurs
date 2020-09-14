$(document).ready(function () {

    var korpa = [];

    if (window.localStorage.korpa == undefined) {
        window.localStorage.korpa = "[]";
    }
    else {
        korpa = JSON.parse(window.localStorage.korpa)
    }


    let slajderSlike = [
        "https://previews.123rf.com/images/adiruch/adiruch1804/adiruch180400570/100111395-computers-the-view-from-the-top-business-banner-with-copy-space.jpg",
        "https://shop.webworkservicesllc.com/wp-content/uploads/2018/12/New-Refurbished-Banner.jpg",
        "https://www.skiinv.com/wp-content/uploads/2016/03/computer-technology-and-data-center-web-header.jpg",
    ]

    for (let i = 0; i < slajderSlike.length; i++) {
        $(".carousel-indicators").append(`
           <li data-target="#myCarousel" data-slide-to="${i}"></li>
        `)
        $(".carousel-inner").append(`
            <div class="item">
                <img src="${slajderSlike[i]}">
            </div>
        `)
    }
    $(".carousel-indicators > li:first").addClass('active');
    $(".carousel-inner > .item:first").addClass('active');

    data.forEach(product => {
        $("#proizvodi").append(`
            <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">${product.name}</div>
                    <div class="panel-body"><img src="${product.image}" class="img-responsive"
                            style="width:100%" alt="Image"></div>
                    <div class="panel-footer">${product.price} rsd 
                        <button class="btn btn-primary" onclick="dodajUKorpu(${product.id})">
                            <span class="glyphicon glyphicon-shopping-cart"></span>
                            Dodaj u kopru
                        </button>
                    </div>
                </div>
            </div>
        `)
    });




})


function dodajUKorpu(product) {
    var korpa = JSON.parse(window.localStorage.korpa);
    for (let i = 0; i < data.length; i++) {
        if (product == data[i].id) {
            korpa.push({
                name: data[i].name,
                price: data[i].price,
                image: data[i].image
            });
        }

    }
    window.localStorage.korpa = JSON.stringify(korpa);
    console.log(window.localStorage.korpa);
    promeniBrojac();
    sadrzajKorpe();
    zbirKorpa();
}


function promeniBrojac() {
    var korpa = JSON.parse(window.localStorage.korpa);
    $(".brojac").text(korpa.length);
}

promeniBrojac();

function sadrzajKorpe(params) {
    var korpa = JSON.parse(window.localStorage.korpa);
    $("#sadrzaj-korpe").empty();
    korpa.forEach((element, index) => {
        $("#sadrzaj-korpe").append(`
            <tr>
                <td><img src="${element.image}"></td>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td><button class="btn btn-danger" onclick=brisanje(${index})>
                <span class="glyphicon glyphicon-trash"></span>
                </button></td>
            </tr>
        `)
    });
}

function brisanje(i) {
    var korpa = JSON.parse(window.localStorage.korpa);
    korpa.splice(i, 1);
    window.localStorage.korpa = JSON.stringify(korpa);
    sadrzajKorpe();
    promeniBrojac();
    zbirKorpa();
}

function zbirKorpa() {
    var korpa = JSON.parse(window.localStorage.korpa);
    var zbir = 0;
    for (let i = 0; i < korpa.length; i++) {
        zbir += Number(korpa[i].price);
    }
    $("#zbir").text("Ukupno: " + zbir + " din");
}

sadrzajKorpe();
zbirKorpa();





// -------------------------------------------------------

function naziv(params) {

}

var naziv = function (params) {

}

var proba = params => { }

// array.forEach(function (element) {

// });


function a(b) {
    b(4)
}


a(function (e) {
    console.log(e);
})