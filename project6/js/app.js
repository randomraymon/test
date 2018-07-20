// JavaScript Document

$('#fullpic').click({
  
   container: window,
   direction: 'vertical',
   doIn: function() {
     $("#snippetpic").addClass("in");
   },
   doOut: function() {
    $("#snippetpic.in").removeClass("in");
   },
   tolerance: 200,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});