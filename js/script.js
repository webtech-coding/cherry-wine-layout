(function(){    
    var sidebar_menu=document.querySelector(".sidebar__menu");
    var menu_item=document.querySelector(".menu__item");
    document.querySelector("#menuOpen").addEventListener("click",function(){
        sidebar_menu.style.right="0rem";        
        
    });
    document.querySelector("#menuClose").addEventListener("click",function(){
        sidebar_menu.style.right="-40rem";        
    });  
   
})();

