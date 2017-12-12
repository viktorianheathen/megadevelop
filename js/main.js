$(document).ready(function(){

    /* ScrollBar */
    $('html').niceScroll();
    /* /// ScrollBar */

    /* Slick */
    $('.slider_box_inner').slick({

        dots: true
        
    });

    $('.fake_next').on('click', function(){
        $(this).parent().find('.slider_box_inner .slick-next').trigger('click');
    });
    $('.fake_prev').on('click', function(){
        $(this).parent().find('.slider_box_inner .slick-prev').trigger('click');
    });
    /* /// Slick */

});