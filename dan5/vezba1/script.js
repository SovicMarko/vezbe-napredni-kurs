$(document).ready(function () {

    // text(), html(), val(), attr()

    // preuzima tekstualni sadrzaj
    var sadrzaj = $("#pasus1").text(); // innerText
    console.log(sadrzaj);
    // postavlja tekstualni sadrzaj
    $("#pasus1").text("Neki <b>novi</b> tekst");

    // preuzima html sadrzaj
    var s = $("#polje1").html(); // innerHTML
    console.log(s);
    // postavlja html sadrzaj
    $("#polje1").html("Neki <b>novi</b> tekst");

    // postavlja vrednost unutar input polja
    $("#unos").val("Pocetna vrednost");

    $("#dugme1").click(function () {
        // preuzima vrednost iz input polja
        console.log($("#unos").val()); // value
    })

    var vrednost = $("#slika1").attr("src");
    console.log(vrednost);

    $(".slika").click(function () {
        var adresa = $(this).attr("src");
        $("#spoljni").css("display", "block");
        $("#unutrasnji").html(`
            <img src='${adresa}'>
        `)
    })

    $("#izlaz").click(function () {
        $("#spoljni").css("display", "none");
    })

    $("#dugme2").click(function () {
        $("#link").attr("href", "https://www.youtube.com");
    })

    // --------------------------------------------------

    // dodaje na kraj, odn nakon postojeceg sadrzaja
    $("#polje2").append("<p>Drugi pasus - append</p>");
    // dodaje na pocetak, odn pre postojeceg sadrzaja
    $("#polje2").prepend("<p>Treci pasus - prepend</p>");
    // dodaje nakon divajdera polje2
    $("#polje2").after("<p>Cetvrti pasus - after</p>");
    // dodaje pre divajdera polje2
    $("#polje2").before("<p>Peti pasus - before</p>");

    // uklanja citav divajder
    // $("#polje2").remove();

    // uklanja unutrasnji sadrzaj
    //$("#polje2").empty();

    $("#dugme3").click(function () {
        $("body").addClass("darkMod");
    })
    $("#dugme4").click(function () {
        $("body").removeClass("darkMod");
    })
    $("#dugme5").click(function () {
        $("body").toggleClass("darkMod");
    })

    console.log($("#polje2").next());
})