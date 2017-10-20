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
    //para o carousel ficar responsivo, é necessário adicionar  quantidade de itens para cada tamanho.
    $('.thumbnails').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
    // script para as setas de prev e next funcionarem, já com o código atualizado.
    var owl = $(".thumbnails");
    owl.owlCarousel();
    $('#btn-news-prev').on("click", function(){
      owl.trigger('prev.owl.carousel');
    });
    $('#btn-news-next').on("click", function(){
      owl.trigger('next.owl.carousel');
    });
});
