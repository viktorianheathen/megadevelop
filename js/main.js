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
    function playPause(vid)
    {
        var vid = document.getElementById(vid);
        if(vid.paused)
            {
                vid.play();
                $('.playPause').hide();
                $('.video_overlay').addClass('played');
            }
        else
            {
                vid.pause();
                $('.playPause').show();
                $('.video_overlay').removeClass('played');
            }
    }
    $('.playPause').on('click', function(){playPause('landing_video');});
    $('.video_overlay').on('click', function(){playPause('landing_video');});

});