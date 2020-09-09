
// $(document).ready(function () {

function ispisProizvoda() {
    for (let i = 0; i < data.length; i++) {
        $("#proizvodi").append(`
                <div class='kartica' id="${data[i].id}">
                    <h3>${data[i].name}</h3>
                    <img class="slika" onclick="prikazModala(this)" src="${data[i].image}">
                    <h2>${data[i].price}</h2>
                </div>
            `)

    }
}
ispisProizvoda();

function prikazModala(e) {

    $(".spoljni-modal").animate({
        left: "0px"
    });

    var id = $(e).parent().attr("id");

    var objekat = pronadjiProizvod(id);

    $(".unutrasnji-modal").html(`
            <div>
                <h1>${objekat.name}</h1>
                <h2>${objekat.tip}</h2>
                <hr>
                <p>${objekat.description}</p>
                <p>Cena:</p>
                <h1>${objekat.price} din</h1>
            </div>
            <div>
                <img src="${objekat.image}">
            </div>
        `)
}

function pronadjiProizvod(id) {
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].id)
            return data[i];
    }
}

$("#izlaz").click(function () {
    // $(".spoljni-modal").fadeOut();
    $(".spoljni-modal").animate({
        left: "-100%"
    });
})


function ispisPretrageProizvoda(e) {
    $("#proizvodi").empty();
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.indexOf(e.val()) >= 0) {
            $("#proizvodi").append(`
                    <div class='kartica' id="${data[i].id}">
                        <h3>${data[i].name}</h3>
                        <img class="slika" onclick="prikazModala(this)" src="${data[i].image}">
                        <h2>${data[i].price}</h2>
                    </div>
                `)
        }
    }
}

$("#pretraga").change(function () {
    ispisPretrageProizvoda($(this));
})

// })