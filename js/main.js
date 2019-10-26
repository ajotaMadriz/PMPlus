AOS.init({
    offset: 200,
    duration: 2000,
});
//------------------menu------------------------
$(document).ready(function(){
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
    })
})
// ---------- boton scrollTop-------------
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.boton-top').fadeIn();
        }else{
            $('.boton-top').fadeOut();
        }
    });
    // ----- smooth scrolling to top---
        $('.boton-top').click(function(){
            $('html,body').animate({scrollTop: 0}, 500)
        })
});