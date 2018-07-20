// JavaScript Document

// ------------------------------------ first image section

$('#second').onScreen({
  
   container: window,
   direction: 'vertical',
   doIn: function() {
     $(".firstleft").addClass("up");
     $(".firstright").addClass("down");
   },
   doOut: function() {
     $(".firstleft.up").removeClass("up");
     $(".firstright.down").removeClass("down");

   },
   tolerance: 100,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});

// -----------------------------------------second Image section


$('#second').onScreen({
  
  container: window,
  direction: 'vertical',
  doIn: function() {
    $(".secondleft").addClass("inleft");
    $(".secondright").addClass("inright");
  },
  doOut: function() {
    $(".secondleft.inleft").removeClass("inleft");
    $(".secondright.inright").removeClass("inright");

  },
  tolerance: 100,
  throttle: 50,
  toggleClass: 'onScreen',
  lazyAttr: null,
  lazyPlaceholder: 'someImage.jpg',
  debug: false
});


$('#thirdsection').onScreen({

  container: window,
  direction: 'vertical',



  doIn: function() {
  
    $(".thirdhigh").delay(5000).addClass("thirdinhigh");
    $(".thirdlow").addClass("thirdinlow");
  },

    doOut: function() {
    $(".thirdhigh.thirdinhigh").removeClass("thirdinhigh");
    $(".thirdlow.thirdinlow").removeClass("thirdinlow");

  },

  tolerance: 100,
  throttle: 50,
  toggleClass: 'onScreen',
  lazyAttr: null,
  lazyPlaceholder: 'someImage.jpg',
  debug: false

});
