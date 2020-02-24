window.onload=function(){
    function number_to(id,from,to,duration)
    {
    var element = document.getElementById(id);
    var start = new Date().getTime();
    setTimeout(function() {
        var now = (new Date().getTime()) - start;
        var progress = now / duration;
        var result = Math.floor((to - from) * progress + from);
        element.innerHTML = progress < 1 ? result : to;
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
    }
    number_to("counter-customers",0,28,5000);
    number_to("counter-apps",0,57,5000);
    number_to("counter-downloads",0,34023,5000);
    };