$(document).ready(function(){
    $(".menu__item").click(function(){         
        $(this).find(".list-items__submenu").slideToggle("slow");
        $(".menu__item").not(this).find('.list-items__submenu').slideUp("slow");
    });

    $(".list-items__submenu--list").click(function(e){
        e.stopPropagation();
    });

    $("#menuOpen").click(function(){
        $(".homepage__overlay").css("display","block");
    });
    $("#menuClose").click(function(){
        $(".homepage__overlay").css("display","none");
    });
});