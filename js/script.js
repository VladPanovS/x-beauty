$( document ).ready(function() {
             new WOW().init();
    //scroll
    $('.logo').click(function(){
           $('html, body').animate({scrollTop:$('#top').position().top}, 2000);
    });
    $('.arrow-scroll').click(function(){
           $('html, body').animate({scrollTop:$('#main-content').position().top}, 2000);
    });
    $('.school-link').click(function(){
           $('html, body').animate({scrollTop:$('#education').position().top}, 2000);
    });
    $('.contact-link').click(function(){
           $('html, body').animate({scrollTop:$('#contact').position().top}, 2000);
    });

    //burgrer menu
             $(".burger").click(function(){
             $(".burger-line").toggleClass("line-active")
             $(".logo-nav").toggleClass("visible")
             $(".visible").show();
         });
  

});
