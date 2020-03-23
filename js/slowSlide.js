 $(document).ready(function(){
     $("#menu").on("click","a", function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
             top = $(id).offset().top;
        document.querySelectorAll('ul li a').forEach((item, i) => {
            item.classList = ''
        })
        $(this).toggleClass('active')
        $('body,html').animate({scrollTop: top}, 1000);
     });
 });