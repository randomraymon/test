// JavaScript Document

$('#bahnhof').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     $("#middlebox").addClass("inview");
   },
   doOut: function() {
     // Do something to the matched elements as they get off scren
   },
   tolerance: 200,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});