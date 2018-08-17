$(".scrollPlan").click(function() {
    $('html,body').animate({
        scrollTop: $(".dietPlan").offset().top},
        'slow');
});



$(".scrollContact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
