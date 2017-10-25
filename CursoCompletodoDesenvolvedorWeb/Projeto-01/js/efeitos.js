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
    //Animação para quando clickar no botão do rodapé, voltar pro inicio do site
    $("#page-up").on("click", function(event){
        $('html, body').animate({
          scrollTop: 0 }, 'slow');
        event.preventDefault(); //cancela o comportamento padrão do click
    });

    //efeito para o menu-mobile header
    $("#btn-bars").on("click", function(){

        $("header").toggleClass("open-menu");

    });
    //efeito para o menu-mobile bottom(fechar)
    $("#menu-mobile-mask, .btn-close").on("click", function(){
      $("header").removeClass("open-menu");
    });
    //menu de busca
    $("#btn-search").on("click", function(){
      $("header").toggleClass("open-search");
      $("input-search-mobile").focus();
    });
});
