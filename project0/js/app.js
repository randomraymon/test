// JavaScript Document

$(".about").click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
   $("div.aboutbox").slideDown(250);
} else {
   $(".aboutbox").slideUp(250);
}
$(this).data("clicks", !clicks);
});