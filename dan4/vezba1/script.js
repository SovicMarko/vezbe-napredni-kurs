// dolar funkcija
// selektuje elemente
$(document).ready(function () {

    // selektovanje preko id-ja
    $("#polje").html("Dinamicki dodato");
    // document.getElementById("polje").innerHTML = "Dinamicki dodato";

    $(".crvena").css("color", "red");
    // var e = document.getElementsByClassName("crvena");
    // for (let i = 0; i < e.length; i++) {
    //     e[i].style.color = "red";
    // }

    $("li").css("text-decoration", "underline");
    // var e = document.getElementsByTagName("li");
    // for (let i = 0; i < e.length; i++) {
    //     e[i].style.textDecoration = "underline";
    // }
    $('input[type="text"]').css("background-color", "lightblue");

    // dogadjaji 

    $("#dugme1").click(function () {
        $("section").css("background-color", "red");
    })

    // ulazak kursorom unutar elementa
    $("article").mouseenter(function () {
        $(this).css("background-color", "blue");
    })

    // izlazak kursora van elementa 
    $("article").mouseleave(function () {
        $(this).css("background-color", "green");
    })

});



