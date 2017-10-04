$(document).ready(function(){
    $("#logotipo").on("mouseover", function(){

        $("#banner h1").addClass("efeito");

    }).on("mouseout", function(){

        $("#banner h1").removeClass("efeito");

    });

    $("#input-search").on("focus", function(){

        $("li.search").addClass("ativo");

    }).on("blur", function(){

        $("li.search").removeClass("ativo");

    });

    $(".thumbnails").owlCarousel({

        //autoplay: 3000,
        items : 4

    });
});
