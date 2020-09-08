$(document).ready(function () {
    $("#dugme1").click(function () {
        $("#polje1").hide();
    });
    $("#dugme2").click(function () {
        $("#polje1").show();
    });
    $("#dugme3").click(function () {
        $("#polje1").toggle();
    })

    $("#dugme4").click(function () {
        $("#polje2").fadeOut();
    });
    $("#dugme5").click(function () {
        $("#polje2").fadeIn();
    });
    $("#dugme6").click(function () {
        $("#polje2").fadeToggle();
    })

    $("#dugme7").click(function () {
        $("#polje3").slideUp();
    });
    $("#dugme8").click(function () {
        $("#polje3").slideDown();
    });
    $("#dugme9").click(function () {
        $("#polje3").slideToggle();
    })

    $("#dugme10").click(function () {
        $("#polje4").animate({
            width: "500px",
            height: "+=100px",
            opacity: "0.7"

        }, 5000)

    })

    $("#dugme11").click(function () {
        $("#polje4").stop(true);

    })

    $("#povecaj").click(function () {
        $("p").css({
            fontSize: "+=10px",
            color: "red",
            textDecoration: "underline"
        })
    })
    $("#smanji").click(function () {
        $("p").css({
            fontSize: "-=10px",
            color: "blue",
            textDecoration: "none"
        })
    })

    $("#dugme12").click(function () {
        $("#polje5").slideUp(2000, function () {
            // $(this).slideDown();
            alert("Ovo je callback funkcija")
        })
    })

    $("#dugme13").click(function () {
        $("#polje6").slideUp(2000).fadeIn(1000).slideUp(1500)
            .slideDown(1000).animate({ "width": "500px" }, 1000)
            .fadeOut(1000);
    })
});





