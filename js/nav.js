$(document).ready(function() {

    $(document).on("scroll", function(){
            if
          ($(document).scrollTop() > 200){
              $("header").addClass("shrink");
            }
            else
            {
                $("header").removeClass("shrink");
            }
        });

// Hamburger
    $('.menu-toggle').on('click', function() {
        $('.menu-toggle').toggleClass('active');
        $('.main-menu').toggleClass('menu-active');
        
    });

    $('.main-menu li a').on('click', function() {
        $('.main-menu').toggleClass('menu-active');
        
    });

});