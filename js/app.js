// JavaScript Document

$( document ).delay(2000).ready(function() {
        
        $('.frame1').delay(5000).fadeOut('slow', function(){
            $('.frame2').fadeIn('slow', function(){
                $('.frame2').delay(5000).fadeOut('slow', function(){
                    $('.frame3').fadeIn('slow', function(){
                        $('.frame4').addClass('visible', function(){
                    });
                });
            });
        });
    });
} );


$(".frame3").click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
   $("div.intro_container").slideUp(600);
} 
$(this).data("clicks", !clicks);
});


// $( document ).ready(function() {
    
//     $(".frame1").delay( 2000 ).fadeIn("slow");
//     $(".frame1").delay( 2000 ).fadeOut("slow");

//     setTimeout(function() {
//                 $('.frame2').fadeIn("slow");}, 2000);
        
   



// } );


$('.icon2').click(function() {
    $("div.intro_container").slideDown('600',function(){location.reload();});
    
});


