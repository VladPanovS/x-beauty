$( document ).ready(function() {
             new WOW().init();
    //scroll
    $('.logo').click(function(){
           $('html, body').animate({scrollTop:$('#top').position().top}, 2000);
    });
    $('.arrow-scroll').click(function(){
           $('html, body').animate({scrollTop:$('#main-content').position().top}, 2000);
    });
    $('.contact-link').click(function(){
           $('html, body').animate({scrollTop:$('#contact').position().top}, 2000);
    });
});
