$(window).scroll(function (){
    $(' .mov').each(function (){
        var imagePos = $(this).offset().top;
        console.log("Hell world")
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+100) {
            $(this).addClass('bounceInUp');
        }
    });
});